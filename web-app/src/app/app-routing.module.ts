import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { StartComponent } from './start/start.component';
import { TheoryComponent } from './theory/theory.component';

const routes: Routes = [
  { path: 'start-the-journey', component: StartComponent },
  { path: 'the-challenge', component: ChallengeComponent, data: { animation: 'slideInAnimation' } },
  { path: 'universal-design-theory', component: TheoryComponent },
  { path: 'how-to-apply-ud', component: ApplicationComponent },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
