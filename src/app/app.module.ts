import { BrowserModule } from '@angular/platform-browser';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { MatButtonModule } from '@angular/material/button';

import { FormatPipe } from './pipes/time-format/time-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
