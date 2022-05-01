import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    MovieslistComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HttpClientModule, 
    MatGridListModule, 
    MatPaginatorModule,
    BrowserAnimationsModule,
    LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
