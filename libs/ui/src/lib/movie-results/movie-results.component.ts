import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from '@ngflix/service';

@Component({
  selector: 'ngflix-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent {

  public searchTerm = '';
  public movie$ = this.movieDbService.result$;
  public noData = false;

  constructor(
    private movieDbService: MovieDbService,
    private router: Router) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.searchTerm = this.router.getCurrentNavigation().extras.state.title;
        this.movieDbService.search(this.searchTerm);
        this.noData = false;
      }      
      else {
        this.noData = true;
      }
    }

  public viewMovie(imdbID: string): void {
    this.router.navigate(['/movie', imdbID]);
  }  

  public loadMore(): void {
    const page = this.movieDbService.lastPage + 1;
    this.movieDbService.search(this.searchTerm, page, true);
  }
}
