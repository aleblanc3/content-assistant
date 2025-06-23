import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FileProcessingResult } from '../../../../services/image-assistant-state.service';

@Component({
  selector: 'ca-csv-download',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './csv-download.component.html',
  styles: [`
    .csv-download-container {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }
  `]
})
export class CsvDownloadComponent {
  @Input() results: { [fileName: string]: FileProcessingResult } = {};
  
  hasResults(): boolean {
    return Object.keys(this.results).length > 0;
  }
  
  hasCompletedResults(): boolean {
    return Object.values(this.results).some(result => result.status === 'completed');
  }
  
  downloadCsv(): void {
    let csvContent = "File/Page,English Description,French Description\n";
    
    // Get sorted keys for consistent CSV output
    const sortedFileNames = Object.keys(this.results).sort();
    
    sortedFileNames.forEach(fileName => {
      const result = this.results[fileName];
      if (result.status === 'completed') {
        const identifier = result.fileName;
        const english = result.data.english || '';
        const french = result.data.french || '';
        
        const escapeCsv = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
        csvContent += `${escapeCsv(identifier)},${escapeCsv(english)},${escapeCsv(french)}\n`;
      }
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "image_descriptions.csv";
    link.click();
    URL.revokeObjectURL(url);
  }
}