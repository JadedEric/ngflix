import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDbService } from '@ngflix/service';

/* font awesome */
import { faStar as faStarFill } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ngflix-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  public movie$ = this.movieDbService.movie$;

  /* font awesome */
  public faStarFill = faStarFill;
  public faStar = faStar;

  private imdbID = '';

  constructor(
    private movieDbService: MovieDbService,
    private router: ActivatedRoute) {
      this.movieDbService.getMovieById(this.router.snapshot.paramMap.get('id'));
    }

  public ngOnInit(): void {
    const b = false;
  }

}
