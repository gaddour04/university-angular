import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdduniversityComponent } from './components/adduniversity/adduniversity.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailuniversityComponent } from './components/detailuniversity/detailuniversity.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UniversityComponent } from './components/university/university.component';
import { UpdateuniversityComponent } from './components/updateuniversity/updateuniversity.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'',component:AccueilComponent},
  {path:'university-add',component:AdduniversityComponent, canActivate:[AuthGuard]},
  {path:'university-update/:id',component:UpdateuniversityComponent, canActivate:[AuthGuard]},
  {path:'university',component:UniversityComponent, canActivate:[AuthGuard]},
  {path:'detail/:id',component:DetailuniversityComponent},
  {  path:'login'   , component:LoginComponent },
  {  path:'register', component:RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
