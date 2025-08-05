# Split and Convert CSV to XLSX, then delete CSV files

$inputFile = "sanitized-recombined.csv"

if (-Not (Test-Path $inputFile)) {
    Write-Error "File '$inputFile' not found."
    exit
}

# Read all lines from the CSV
$allLines = Get-Content $inputFile
$header = $allLines[0]
$data = $allLines[1..($allLines.Count - 1)]
$totalRows = $data.Count
$parts = 6
$rowsPerFile = [math]::Ceiling($totalRows / $parts)

# Function to convert CSV to XLSX using Excel COM
function Convert-CsvToXlsx {
    param (
        [string]$csvPath,
        [string]$xlsxPath
    )

    $excel = $null
    try {
        $excel = New-Object -ComObject Excel.Application
        $excel.Visible = $false
        $excel.DisplayAlerts = $false

        $fullCsvPath = Join-Path $PWD $csvPath
        $fullXlsxPath = Join-Path $PWD $xlsxPath

        if (-not (Test-Path $fullCsvPath)) {
            throw "CSV file not found: $fullCsvPath"
        }

        $workbook = $excel.Workbooks.Open($fullCsvPath)

        try {
            $workbook.SaveAs($fullXlsxPath, 51)  # 51 = xlOpenXMLWorkbook (.xlsx)
            Write-Host "✅ Saved Excel file: $xlsxPath"
        } catch {
            throw "❌ Failed to save ${xlsxPath}: $($_.Exception.Message)"
        } finally {
            $workbook.Close()
        }

    } catch {
        Write-Warning "⚠️ Excel conversion error for $csvPath → $xlsxPath"
        Write-Warning $_.Exception.Message
    } finally {
        if ($excel) {
            $excel.Quit()
            [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
            [GC]::Collect()
            [GC]::WaitForPendingFinalizers()
        }
    }
}

# Split and convert loop
for ($i = 0; $i -lt $parts; $i++) {
    $start = $i * $rowsPerFile
    $end = [math]::Min($start + $rowsPerFile - 1, $totalRows - 1)

    if ($start -gt $end) { break }

    $chunk = $data[$start..$end]
    $csvOut = "sanitized-part$($i+1).csv"
    $xlsxOut = "sanitized-part$($i+1).xlsx"

    try {
        Write-Host "`n➡️ Creating $csvOut with rows $start to $end"
        $header | Out-File -FilePath $csvOut -Encoding UTF8
        $chunk | Out-File -FilePath $csvOut -Append -Encoding UTF8
        Write-Host "✅ CSV created: $csvOut"

        Convert-CsvToXlsx -csvPath $csvOut -xlsxPath $xlsxOut

        if (Test-Path $xlsxOut) {
            Remove-Item $csvOut -Force
            Write-Host "🗑️ Deleted CSV file: $csvOut"
        } else {
            Write-Warning "⚠️ XLSX file not found, skipping deletion of $csvOut"
        }

    } catch {
        Write-Warning "❌ Error processing part $($i+1): $($_.Exception.Message)"
    }
}

# Optional: Open the current folder
# ii $PWD
