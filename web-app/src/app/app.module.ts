import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';





import { NavigationComponent } from './navigation/navigation.component';
import { EventsComponent } from './events/events.component';
import { MapComponent } from './map/map.component';
import { PersonalComponent } from './personal/personal.component';
import { ExploreComponent } from './explore/explore.component';
import { EventCardComponent } from './event-card/event-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';



import * as moment from 'moment';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './common/jwt.interceptor';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavDialogComponent } from './event-detail-page/nav-dialog/nav-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationComponent,
    EventsComponent,
    MapComponent,
    PersonalComponent,
    ExploreComponent,
    EventCardComponent,
    LoginComponent,
    RegisterComponent,
    EventDetailPageComponent,
    NavDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    GoogleMapsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatBadgeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    MatSlideToggleModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [NavDialogComponent]
})
export class AppModule { }
