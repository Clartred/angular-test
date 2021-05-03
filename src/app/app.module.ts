import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Game1Component } from './game1/game1.component';
import { HomeComponent } from './home/home.component';
import { HomeMissclickComponent } from './home-missclick/home-missclick.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { YouDiedComponent } from './game1/you-died/you-died.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    HomeComponent,
    HomeMissclickComponent,
    YouDiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
