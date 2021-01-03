import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UniversityComponent } from './components/university/university.component';
import {HttpClientModule} from '@angular/common/http';
import { AdduniversityComponent } from './components/adduniversity/adduniversity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateuniversityComponent } from './components/updateuniversity/updateuniversity.component';
import { DetailuniversityComponent } from './components/detailuniversity/detailuniversity.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    AccueilComponent,
    SidebarComponent,
    TopbarComponent,
    UniversityComponent,
    AdduniversityComponent,
    UpdateuniversityComponent,
    DetailuniversityComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
