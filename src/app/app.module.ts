import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
//add angular forms
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ArtistComponent]
})
export class AppModule { }
