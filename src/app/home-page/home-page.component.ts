import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FontManagerService } from '../services/font-manager.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';  
import { MatOptionModule } from '@angular/material/core';  


@Component({
  selector: 'app-home-page',
  imports: [CommonModule,
    ReactiveFormsModule,  
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,    
  ], 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,

})
export class HomePageComponent {
  fonts: string[] = [
    'Arial',
    'Roboto',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Tahoma',
    'Georgia',
    'Comic Sans MS',
    'Trebuchet MS'
  ]; 
  fontControl = new FormControl('');
  filteredFonts = this.fonts;


  constructor(private fontManager: FontManagerService) {}

  // ngOnInit() {
  //   // סינון אוטומטי לפי הקלט של המשתמש
  //   this.fontControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map((value) => this._filterFonts(value || ''))
  //     )
  //     .subscribe((filtered) => (this.filteredFonts = filtered));
  // }

  // private _filterFonts(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.fonts.filter((font) => font.toLowerCase().includes(filterValue));
  // }

  onFontSelected(event: any): void {
    const selectedFont = event.option.value;
    const fontUrlMap: { [key: string]: string } = {
      Roboto: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      Arial: '',
      'Times New Roman': '',
    };

    const fontUrl = fontUrlMap[selectedFont] || '';
    this.fontManager.setFontOnElement('Text-box', selectedFont, fontUrl); // שינוי הפונט על הדיב הספציפי
  }

}





