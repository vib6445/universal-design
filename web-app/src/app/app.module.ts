import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { TheoryComponent } from './theory/theory.component';
import { ApplicationComponent } from './application/application.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartComponent } from './start/start.component';

// Material Components
import { MatIconModule } from '@angular/material/icon';
import { BottomNavModule } from 'ngx-bottom-nav';
import { ChallengeComponent } from './challenge/challenge.component';


@NgModule({
  declarations: [
    AppComponent,
    TheoryComponent,
    ApplicationComponent,
    NavigationComponent,
    StartComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    BottomNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
