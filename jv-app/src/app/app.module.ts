import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { Portfolio } from './pages/portfolio/portfolio.component';
import { About } from './pages/about/about.component';
import { Contact } from './pages/contact/contact.component';
import { Blog } from './pages/blog/blog.component';
import { NavBar } from './features/nav-bar/nav-bar.component';
import { Footer } from './features/footer/footer.component';
import { MobileNavbar } from './features/mobile-navbar/mobile-navbar.component';
import { MandanaArt } from './features/mandana-art/mandana-art.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Portfolio,
    About,
    Contact,
    Blog,
    NavBar,
    Footer,
    MobileNavbar,
    MandanaArt
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
