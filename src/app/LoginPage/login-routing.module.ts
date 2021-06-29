import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    //path: 'sign-up',
    //loadChildren: () => import('').then( m => m.SignUpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
