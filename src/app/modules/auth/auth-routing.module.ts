import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      { path: '', component: LoginComponent, data: { screen: 'front' } },
      {
        path: 'sign-up',
        component: SignupComponent,
        data: { screen: 'back' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
