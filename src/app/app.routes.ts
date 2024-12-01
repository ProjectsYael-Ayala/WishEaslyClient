import { Routes } from '@angular/router';
import { FontComponent } from './font/font.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: 'change-font', component: FontComponent }, // הוסף את הנתיב לקומפוננטה
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent }, // נתיב לעמוד הראשי
  
];
