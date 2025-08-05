# Define input and output file paths
$part1 = "sanitized_cra_gcPageReport_en.csv"
$part2 = "sanitized_cra_gcPageReport_fr.csv"
$output = "sanitized-recombined.csv"

# Check if both files exist
if (!(Test-Path $part1)) {
  Write-Error "File not found: $part1"
  exit 1
}
if (!(Test-Path $part2)) {
  Write-Error "File not found: $part2"
  exit 1
}

# Read the first part (with header)
$linesPart1 = Get-Content $part1

# Read the second part (assumed to have no header)
$linesPart2 = Get-Content $part2

# Combine the files
$combinedLines = @()
$combinedLines += $linesPart1

# Skip header in part2 if it exists (optional safeguard)
if ($linesPart2[0] -eq $linesPart1[0]) {
  $linesPart2 = $linesPart2[1..($linesPart2.Count - 1)]
}

$combinedLines += $linesPart2

# Output to new file
$combinedLines | Set-Content $output -Encoding UTF8

Write-Host "Files combined successfully into $output"
