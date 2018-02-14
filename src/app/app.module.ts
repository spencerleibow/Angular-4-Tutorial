import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
//import 'hammerjs';

import { MoviesModule } from './modules/movies/movies.module';
import { CharactersModule } from './modules/characters/characters.module';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { MoviesListComponent } from './modules/movies/components/movies-list/movies-list.component';
import { CharactersListComponent } from './modules/characters/components/characters-list/characters-list.component';
import { MovieComponent } from './modules/movies/components/movie/movie.component';
import { CharacterComponent } from './modules/characters/components/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
 //   MatToolbarModule,
 //   MatButtonModule,
    MoviesModule,
    CharactersModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
