import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { Portfolio } from './pages/portfolio/portfolio.component';
import { About } from './pages/about/about.component';
import { Contact } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Portfolio,
    About,
    Contact,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
