import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about.component';
import { Blog } from './pages/blog/blog.component';
import { Contact } from './pages/contact/contact.component';
import { Home } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },{
    path: 'blog',
    component: Blog
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
