import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '', redirectTo: '/coming-soon', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'coming-soon', component: ComingSoonComponent }
];
