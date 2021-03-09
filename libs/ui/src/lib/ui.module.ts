import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingStripComponent } from './landing-strip/landing-strip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,

    NgbNavModule
  ],
  declarations: [LandingStripComponent, MovieResultsComponent, MovieOverviewComponent],
  exports: [LandingStripComponent, MovieResultsComponent, MovieOverviewComponent]
})
export class UiModule {}
