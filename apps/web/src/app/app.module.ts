import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UiModule } from '@ngflix/ui';
import { CoreModule } from '@ngflix/core';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './pages/movie/movie.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'search',
      component: SearchComponent
    }, {
      path: 'results',
      component: SearchResultsComponent
    }, {
      path: 'movie/:id',
      component: MovieComponent
    }, {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    }]),
    NgbModule,
    CoreModule,
    UiModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
