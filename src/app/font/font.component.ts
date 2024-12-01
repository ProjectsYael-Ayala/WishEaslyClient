import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontManagerService } from '../services/font-manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font',
  template: `
    <div>
      <h2>תצוגה מקדימה של הפונט:</h2>
      <div id="preview" [ngStyle]="{ 'font-family': selectedFont }">
        זהו הטקסט שמוצג עם הפונט {{ selectedFont }}
      </div>
    </div>
  `,
  styles: [
    `
      #preview {
        margin-top: 20px;
        font-size: 24px;
      }
    `
  ],
  imports: [CommonModule],  
})
export class FontComponent implements OnInit {
  selectedFont: string = 'Arial'; 

  constructor(private route: ActivatedRoute, private fontManager: FontManagerService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedFont = params['font'] || this.selectedFont; // קבלת הפונט הנבחר
      this.changeFont(this.selectedFont);
    });
  }

  changeFont(font: string): void {
    const fontUrlMap: { [key: string]: string } = {
      Roboto: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      Arial: '', 
    };

    const fontUrl = fontUrlMap[font] || '';
    this.fontManager.setFontOnElement('preview', font, fontUrl); // שינוי הפונט באמצעות השירות
  }
}
