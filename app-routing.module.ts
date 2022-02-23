import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
const appRoutes: Routes = [
  {path: '',redirectTo:"/",pathMatch:"full" },
  {path: 'login-page', component:LoginpageComponent },
  {path: 'home-page', component:HomePageComponent },
  {path: 'about-page', component: AboutPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }

