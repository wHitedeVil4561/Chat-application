import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthContainerComponent],
  imports: [CommonModule, AuthRoutingModule, RouterModule, ReactiveFormsModule],
})
export class AuthModule {}
