import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdalService } from 'ng2-adal/core';
import { AdalConfigService } from './adal-config.service';
import { LoggedInGuard } from './logged-in.guard';

import { LoginComponent } from './login/login.component';
import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [LoggedInGuard],
    children: [
      { path: '', redirectTo: '/route-1', pathMatch: 'full' },
      { path: 'route-1', component: Route1Component },
      { path: 'route-2', component: Route2Component }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdalService,
    AdalConfigService,
    LoggedInGuard
  ]
})
export class AppRoutingModule { }
