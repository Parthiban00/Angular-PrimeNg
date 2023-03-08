import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Shell} from './shell/shell.service';

const routes: Routes = [
Shell.childRoutes([
  // { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
]),
 {path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
