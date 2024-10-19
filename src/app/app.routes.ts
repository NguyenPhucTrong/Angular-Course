import { TopHeaderComponent } from "./top-header/top-header.component";
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  { path: '**', component: TopHeaderComponent }
];
