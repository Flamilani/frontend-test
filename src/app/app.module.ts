import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SequenceComponent } from './components/sequence/sequence.component';
import { CombinationsComponent } from './components/combinations/combinations.component';

@NgModule({
  declarations: [
    AppComponent,
    SequenceComponent,
    CombinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
