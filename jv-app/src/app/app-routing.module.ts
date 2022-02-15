import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about.component';
import { Home } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
