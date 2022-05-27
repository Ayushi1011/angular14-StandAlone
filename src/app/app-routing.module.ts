import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.aboutRoutes),
  },
];