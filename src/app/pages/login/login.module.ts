import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AuthSharedModule } from './../auth-shared/auth-shared.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AuthSharedModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class LoginModule { }
