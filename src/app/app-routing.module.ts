import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';

const routes: Routes = [
  { path: '', redirectTo: '/route-1', pathMatch: 'full' },
  { path: 'route-1', component: Route1Component },
  { path: 'route-2', component: Route2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
