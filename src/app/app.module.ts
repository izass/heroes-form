import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroSubmittedComponent } from './components/hero-submitted/hero-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroSubmittedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
