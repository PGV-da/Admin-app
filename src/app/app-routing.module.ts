import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminLoginComponent } from './auth/super-admin-login/super-admin-login.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminRegisterComponent } from './auth/admin-register/admin-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/admin-login', pathMatch: 'full' },
  { path: 'auth/super-admin-login', component: SuperAdminLoginComponent },
  { path: 'auth/admin-login', component: AdminLoginComponent },
  { path: 'auth/admin-register', component: AdminRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
