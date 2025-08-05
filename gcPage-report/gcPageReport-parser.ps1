#requires -version 2
<#
.SYNOPSIS
  Creates a modified page report for all CRA pages or a subset of pages

.DESCRIPTION
  Gets information from the AEM gcPageReport-author to create a report of modified pages, when they were modified, who modified them etc.

.INPUTS
    One csv file with all the page properties for everything in AEM (from PP's reporting suite)
    stored as ~\gcPageReport-parser\required\gc-PageReport-author-MM-DD-YYYY.csv

    One csv file with the list with the Canada.ca URLs that you are interested in (optional)
    stored as ~\gcPageReport-parser\required\subset.csv

.OUTPUTS
    Log file stored in ~\gcPageReport-parser\log\logs.log
    One csv file with a list of modified pages, who they were modified by, and when etc. for all or a subset of pages
    stored as ~\gcPageReport-parser\results\full-modified-page-report-MM-DD-YYYY.csv or
    stored as ~\gcPageReport-parser\results\subset-modified-page-report-MM-DD-YYYY.csv

.NOTES
  Version:        2.0
  Author:         Amber LeBlanc
  Creation Date:  2019-02-06
  Purpose/Change: Initial script development
  Creation Date:  2019-05-29
  Purpose/Change: Combined subset-of-pages-report.ps1 with modified-page-report.ps1
  Creation Date:  2019-06-28
  Purpose/Change: Added options for 4 different report types (modified & all CRA)
  Creation Date:  2019-07-10
  Purpose/Change: Added options for 3 more report types (live, unpublished, locked)
  Creation Date:  2019-07-16
  Purpose/Change: Added options for orphaned page report
  Creation Date:  2023-11-08
  Purpose/Change: Added Opposite language page title to the reports
  
#>

#---------------------------------------------------------[Initialisations]--------------------------------------------------------

#Set Error Action to Silently Continue
$ErrorActionPreference = "SilentlyContinue"

#Dot Source required path
$dotSourcePath = $PSScriptRoot + "\src\Logging_Functions.ps1"

#Dot Source required Function Libraries
. $dotSourcePath

#----------------------------------------------------------[Declarations]----------------------------------------------------------

#Script Version
$sScriptVersion = "1.0"

#Script Path
$scriptPath = $PSScriptRoot

#Set date
$date = (Get-Date).ToString("yyyy-MM-dd" +"T" +"HH:mm:ss.fff" + "-05:00")
$shortDate = (get-date).ToString('MM-dd-yyyy')

#Log File Info
$sLogPath = $PSScriptRoot + "\log\"
$sLogName = "log-" + $shortDate + ".txt"
$sLogFile = Join-Path -Path $sLogPath -ChildPath $sLogName

#Set up a global counter
$Global:counter = 0;

#Path of "required" CSV files
$srequiredPath = $PSScriptRoot + "\required\"
$srequiredFile = $srequiredPath + "gcPageReport-author-" + $shortDate + ".csv"
$srequiredFileOrphan = $srequiredPath + "gcOrphanPageReport-publish-" + $shortDate + ".csv"
$CSVsubset = $srequiredPath + "subset.csv"
#Path of "results" CSV files
$sresultsPath = $PSScriptRoot + "\results\"
$sresultsFullMod = $sresultsPath + "full-modified-page-report-" + $shortDate + ".csv"
$sresultsSubsetMod = $sresultsPath + "subset-modified-page-report-" + $shortDate + ".csv"
$sresultsFull = $sresultsPath + "full-cra-page-report-" + $shortDate + ".csv"
$sresultsSubset = $sresultsPath + "subset-cra-page-report-" + $shortDate + ".csv"
$sresultsFullLive = $sresultsPath + "live-cra-page-report-" + $shortDate + ".csv"
$sresultsFullUnpub = $sresultsPath + "unpublished-cra-page-report-" + $shortDate + ".csv"
$sresultsFullLock = $sresultsPath + "locked-cra-page-report-" + $shortDate + ".csv"
$sresultsOrphan = $sresultsPath + "orphaned-cra-page-report-" + $shortDate + ".csv"
$sresultsFullMeta =  $sresultsPath + "full-metadata-report-" + $shortDate + ".csv"
$sresultsSubsetMeta =  $sresultsPath + "subset-metadata-report-" + $shortDate + ".csv"
$sresultsSubsetMetaOppLang =  $sresultsPath + "subset-metadata-for-opposite-language-report-" + $shortDate + ".csv"
$sresultsSubsetMetaCombine = $sresultsPath + "subset-metadata-both-languages-report-" + $shortDate + ".csv"

#Path of AEM page Report and Orphan page Report.
$gcPageReport = "https://author-canada-prod.adobecqms.net/etc/gcReporting/gcPageReport-author-05-19-2022.csv"
$gcOrphanPageReport = "https://author-canada-prod.adobecqms.net/etc/gcReporting/gcOrphanPageReport-publish-05-19-2022.csv"

gcPageReport  = "C:\Users\$sScriptUser\Downloads\" + $srequiredFile
$gcOrphanPageReportDL = "C:\Users\$sScriptUser\Downloads\" + $srequiredFileOrphan

#-----------------------------------------------------------[Functions]------------------------------------------------------------

function Example{
  Param($parameter)
  
  Begin{
    Log-Write -LogPath $sLogFile -LineValue "Doing something..."
  }
  
  Process{
    Try{

#Put script here



    }
    
    Catch{
      Log-Error -LogPath $sLogFile -ErrorDesc $_.Exception -ExitGracefully $True
      Break
    }
  }
  
  End{
    If($?){
      Log-Write -LogPath $sLogFile -LineValue "Completed Successfully."
      Log-Write -LogPath $sLogFile -LineValue " "
    }
  }
}

Function selectReportType{
  Begin{
    Log-Write -LogPath $sLogFile -LineValue "Chose another report..."
  }
  
  Process{
    Try{
      #Choose a report type
      While($report -lt 1) {
        Write-host "`nChoose an option:`n" -ForegroundColor Yellow 
        $Readhost = Read-Host "1.  Modified page report (full)`n2.  Modified page report (subset)`n3.  CRA page report (full)`n4.  CRA page report (subset)`n5.  Live page report`n6.  Unpublished page report `n7.  Locked page report`n8.  Orphaned page report `n9.  Metadata report (full) `n10. Metadata report (subset) `n11. Exit `n`nSelection" 
        Switch ($ReadHost) 
        { 
          1 {Write-host "`n1, full modified page report`n"; $report=1} 
          2 {Write-Host "`n2, subset modified page report`n"; $report=2}
          3 {Write-Host "`n3, full CRA page report`n"; $report=3} 
          4 {Write-Host "`n4, subset CRA page report`n"; $report=4} 
          5 {Write-Host "`n5, full live page report`n"; $report=5} 
          6 {Write-Host "`n6, full unpublished page report`n"; $report=6} 
          7 {Write-Host "`n7, full locked page report`n"; $report=7} 
          8 {Write-Host "`n8, full orphaned page report`n"; $report=8} 
          9 {Write-Host "`n9, full metadata report`n"; $report=9} 
          10 {Write-Host "`n10, subset metadata report`n"; $report=10} 
          11 {Write-Host "`n11, Exit`n"; $report=11}
          Default {Write-Host "`nInvalid response`n"; $report=0} 
        } 
      }
      generateReport($report)
    }
    
    Catch{
      Log-Error -LogPath $sLogFile -ErrorDesc $_.Exception -ExitGracefully $True
      Break
    }
  }
  
  End{
    If($?){
      Log-Write -LogPath $sLogFile -LineValue "Completed Successfully."
      Log-Write -LogPath $sLogFile -LineValue " "
    }
  }
}
Function generateReport($report){

      #Full modified page report
If ($report -eq 1) { 

  Log-Write -LogPath $sLogFile -LineValue "Option 1, full modified page report was selected"
  #Create a CSV with a list of all CRA pages that are modified and not unpublished
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and ($_.'Last Modified date' -gt $_.'Last Published date') -and ($_.'Last Published date' -ne "") -and ($_.'Last Published date' -gt $_.'Last Unpublished date') -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsFullMod -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFullMod).count
  Log-Write -LogPath $sLogFile -LineValue "A full modified page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFullMod
  
  }
  
  #Subset modified page report
  If ($report -eq 2) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 2, subset modified page report was selected"
  #Create a regex for a subset of pages from a csv
  $sCSVsubset = Import-CSV $CSVsubset ;
  $regexSubset = [string]::Join('|', $sCSVsubset."Links") ;
  #Create a CSV with only data from the subset of pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Public path' -match $regexSubset) -and ($_.'Last Modified date' -gt $_.'Last Published date') -and ($_.'Last Published date' -ne "") -and ($_.'Last Published date' -gt $_.'Last Unpublished date')        
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsSubsetMod -NoTypeInformation ;
  #Updates Log
  $subsetLEN = (Import-Csv $sresultsSubsetMod).count
  Log-Write -LogPath $sLogFile -LineValue "A subset modified page report was created with $subsetLEN entries"
  #Open the results
  Invoke-Item $sresultsSubsetMod
  
  }
  
  #Full page report
  If ($report -eq 3) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 3, full CRA page report was selected"
  #Create a CSV with a list of all CRA pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsFull -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFull).count
  Log-Write -LogPath $sLogFile -LineValue "A full CRA page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFull
  
  }
  
  
  #Subset page report
  If ($report -eq 4) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 4, subset CRA page report was selected"
  #Create a regex for a subset of pages from a csv
  $sCSVsubset = Import-CSV $CSVsubset ;
  $regexSubset = [string]::Join('|', $sCSVsubset."Links") ;
  #Create a CSV with only data from the subset of pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Public path' -match $regexSubset)        
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsSubset -NoTypeInformation ;
  #Updates Log
  $subsetLEN = (Import-Csv $sresultsSubset).count
  Log-Write -LogPath $sLogFile -LineValue "A subset CRA page report was created with $subsetLEN entries"
  #Open the results
  Invoke-Item $sresultsSubset
  
  }
  
  #Full live page report
  If ($report -eq 5) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 5, full live page report was selected"
  #Create a CSV with a list of all CRA pages that are live
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and ($_.'Last Published date' -ne "") -and ($_.'Last Published date' -gt $_.'Last Unpublished date') -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsFullLive -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFullLive).count
  Log-Write -LogPath $sLogFile -LineValue "A full live page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFullLive
  
  }
  
  #Full unpublished page report
  If ($report -eq 6) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 6, full unpublished page report was selected"
  #Create a CSV with a list of all CRA pages that are unpublished
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and (($_.'Last Published date' -lt $_.'Last Unpublished date') -or ($_.'Last Published date' -eq "")) -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsFullUnpub -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFullUnpub).count
  Log-Write -LogPath $sLogFile -LineValue "A full unpublished page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFullUnpub
  
  }
  
  #Locked page report
  If ($report -eq 7) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 7, full locked page report was selected"
  #Create a CSV with a list of all CRA pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and ($_.'Locked by' -ne "") -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Opposite language page title', 'Opposite language page path', 'Last Modified date', 'Last Modified by', 'Last Published date', 'Last Published by', 'Date modified overridden', 'Date modified override', 'Locked by', 'Language (jcr:language)', 'Public path' | Sort 'Last Modified by' | Export-CSV $sresultsFullLock -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFullLock).count
  Log-Write -LogPath $sLogFile -LineValue "A full locked page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFullLock
  
  }
  
  #Orphaned page report
  If ($report -eq 8) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 8, full orphaned page report was selected"
  #Create a CSV with a list of all CRA pages
  Import-CSV $srequiredFileOrphan | Where-Object {
      ($_.'Creator' -match "revenue-agency") -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Page title', 'Page path', 'Creator', 'Creation date', 'Last updated by', 'Last updated date' | Sort 'Page path' | Export-CSV $sresultsOrphan -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsOrphan).count
  Log-Write -LogPath $sLogFile -LineValue "A full CRA page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsOrphan
  
  }
  
  #Full metadata report
  If ($report -eq 9) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 9, full metadata report was selected"
  #Create a CSV with a list of all CRA pages that are modified and not unpublished
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Owner organization name' -match "revenue-agency") -and ($_.'Page path' -NotMatch "web-services-test") -and ($_.'Page path' -NotMatch "test-web-services")         
          } | Select 'Public path', 'Page title', 'H1', 'Opposite language page title', 'Opposite language page path', 'Keywords', 'Description', 'Free subject' | Sort 'Public path' | Export-CSV $sresultsFullMeta -NoTypeInformation ;
  #Updates Log
  $fullLEN = (Import-Csv $sresultsFullMeta).count
  Log-Write -LogPath $sLogFile -LineValue "A full modified page report was created with $fullLEN entries"
  #Open the results
  Invoke-Item $sresultsFullMeta
  
  }
  
  
  #Subset metadata report
  If ($report -eq 10) { 
  
  Log-Write -LogPath $sLogFile -LineValue "Option 10, subset metadata report was selected"
  #Create a regex for a subset of pages from a csv
  $sCSVsubset = Import-CSV $CSVsubset ;
  $regexSubset = [string]::Join('|', $sCSVsubset."Links") ;
  #Create a CSV with only data from the subset of pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Public path' -match $regexSubset)        
          } | Select 'Public path', 'Page title', 'H1', 'Keywords', 'Description', 'Free subject', 'Opposite language page title', 'Opposite language page path'| Export-CSV $sresultsSubsetMeta -NoTypeInformation ;
  #Updates Log
  $subsetLEN = (Import-Csv $sresultsSubsetMeta).count
  Log-Write -LogPath $sLogFile -LineValue "A subset metadata report was created with $subsetLEN entries"
  
  <#Include opposite language info
  $sCSVsubsetOppLang = Import-CSV $sresultsSubsetMeta ;
  $regexSubsetOppLang = [string]::Join('|', $sCSVsubsetOppLang."Opposite language page path") -replace ".html","";
  #Create a CSV with only data from the opposite language subset of pages
  Import-CSV $srequiredFile | Where-Object {
      ($_.'Page path' -match $regexSubsetOppLang)        
          } | Select 'Public path', 'Page title', 'H1', 'Keywords', 'Description', 'Free subject' | Export-CSV $sresultsSubsetMetaOppLang -NoTypeInformation ;
  #Updates Log
  $subsetLEN = (Import-Csv $sresultsSubsetMetaOppLang).count
  Log-Write -LogPath $sLogFile -LineValue "An opposite language subset metadata report was created with $subsetLEN entries"
  #>
  #Open the results
  Invoke-Item $sresultsSubsetMeta
  #Invoke-Item $sresultsSubsetMetaOppLang
  
  }

  #Subset metadata report
  If ($report -eq 11) { 
  
    Read-Host "`nPress any key to exit"
    Log-Finish -LogPath $sLogFile
  }
  $report = 0
selectReportType
  #Log-Finish -LogPath $sLogFile
  
}

#-----------------------------------------------------------[Execution]------------------------------------------------------------

Log-Start -LogPath $sLogPath -LogName $sLogName -ScriptVersion $sScriptVersion

$report=0

Write-Host "`nGC Page Report Tool" -ForegroundColor "White"
Write-Host "-------------------`r"

#Only run if current gcPageReport-author is in the "required" folder
If (Test-Path $srequiredFile) {

  #checkFiles
  
  selectReportType

Log-Finish -LogPath $sLogFile

}

Else{

Write-Host "`nMissing file: $srequiredFile" -ForegroundColor "Yellow"

Write-Host "`nPlease download the current GC Page Report from AEM and place it in the `"required`" folder."

Log-Write -LogPath $sLogFile -LineValue "Missing file: $srequiredFile"

Read-Host "`nPress any key to exit"

Log-Finish -LogPath $sLogFile

}

