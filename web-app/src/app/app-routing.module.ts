import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { StartComponent } from './start/start.component';
import { UniversalDesignComponent } from './universal-design/universal-design.component';
// import {  } from './event-detail-page/event-detail-page.component';

const routes: Routes = [
  { path: 'start-the-journey', component: StartComponent },
  { path: 'the-challenge', component: ChallengeComponent },
  { path: 'universal-design-theory', component: UniversalDesignComponent },
  { path: 'applying-universal-design', component: ApplicationComponent },
  { path: '**', redirectTo: 'start-the-journey' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

