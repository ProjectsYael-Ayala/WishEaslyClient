import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';  // ייבוא מודול icon



@Component({
  selector: 'app-home-page',
  imports: [MatDividerModule, MatButtonModule,MatIconModule], 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,

})
export class HomePageComponent {


}

