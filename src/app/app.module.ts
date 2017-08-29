import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
