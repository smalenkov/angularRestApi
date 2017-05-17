import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { OrderComponent } from './orders/order.component';
import { ProfileComponent } from './profiles/profile.component';
import { ProfileeditComponent } from './profiles/profileedit.component';
import { TopmenuComponent } from './elements/topmenu/topmenu.component';

import { PagerService } from './_services/pager.service';

const appRoutes: Routes = [
  { path: 'order', component: OrderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit', component: ProfileeditComponent},
  { path: '', redirectTo: '/profile', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    LoginComponent,
    ProfileComponent,
    ProfileeditComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
