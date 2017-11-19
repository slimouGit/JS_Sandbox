import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./user.service";
import {AuthguardGuard} from "./authguard.guard";
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'dashboard', canActivate: [AuthguardGuard], component: DashboardComponent },
  { path: 'contact', canActivate: [AuthguardGuard], component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    ContactComponent
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
