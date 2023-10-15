import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

const MFE1_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE2_APP_URL = "http://localhost:4400/remoteEntry.js";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', 
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: MFE1_APP_URL,
      remoteName: "mfe1App",
      exposedModule: "./RegisterModule"
    }).then(m => m.RegisterModule).catch(err => console.log(err));
  }
},
{path: 'success', 
loadChildren: () => {
  return loadRemoteModule({
    remoteEntry: MFE2_APP_URL,
    remoteName: "mfe2App",
    exposedModule: "./AppModule"
  }).then(m => m.AppModule).catch(err => console.log(err));
}
},
  //{ path: 'mfe2', loadChildren: () => import('mfe2-app/remoteEntry').then(m => m.Mfe2Module) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

