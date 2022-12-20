import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q4C1Component } from './q4-c1/q4-c1.component';
import { Q4C2Component } from './q4-c2/q4-c2.component';
import { Q4C3Component } from './q4-c3/q4-c3.component';
import { Q4C4Component } from './q4-c4/q4-c4.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    Q4C1Component,
    Q4C2Component,
    Q4C3Component,
    Q4C4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
