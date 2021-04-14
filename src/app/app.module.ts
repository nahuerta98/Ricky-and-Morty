import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//Http
import { HttpClientModule } from '@angular/common/http';
//Pagination
import {NgxPaginationModule} from 'ngx-pagination';
import { CharacterComponent } from './components/character/character.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    NavbarComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
