import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Components
import { NavigationComponent } from './navigation/navigation.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { StartComponent } from './start/start.component';
import { UniversalDesignComponent } from './universal-design/universal-design.component';
import { ApplicationComponent } from './application/application.component';







@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChallengeComponent,
    StartComponent,
    UniversalDesignComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
