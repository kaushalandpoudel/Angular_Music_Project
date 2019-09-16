import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { MiddleViewComponent } from './middle-section/middle-view/middle-view/middle-view.component';
import { LoginFormComponent } from './middle-section/login-form/login-form.component';
import { SignupFormComponent } from './middle-section/signup-form/signup-form.component';
import {UploadFormComponent} from './middle-section/rignt-view/upload-form/upload-form.component';

const routes: Routes = [
  {path: 'most_listened' , component: MiddleViewComponent, data :{kind : 'most_listened'}},
  {path: 'playlist' , component: MiddleViewComponent, data :{kind : 'playlist'}},
  {path: 'recent' , component: MiddleViewComponent, data :{kind : 'recent'}},
  {path: 'search' , component: MiddleViewComponent, data :{kind : 'search'}},
  {path: 'login' , component: LoginFormComponent},
  {path: 'sign_up' , component: SignupFormComponent},
  {path: 'upload' , component: UploadFormComponent},
  { path: '',   redirectTo: '/recent', pathMatch: 'full' },
  { path: '**', redirectTo: '/recent'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
