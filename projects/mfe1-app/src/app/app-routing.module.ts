import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {AppComponent} from '../../../mfe2-app/src/app/app.component'

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'success', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
