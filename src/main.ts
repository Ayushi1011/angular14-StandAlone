import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { AppComponent } from './app/app.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { HomeComponent } from './app/home/home.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot([]))],
});
