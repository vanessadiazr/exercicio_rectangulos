import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { RectangleContainerComponent } from './rectangle-container/rectangle-container.component';

import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    RectangleContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
