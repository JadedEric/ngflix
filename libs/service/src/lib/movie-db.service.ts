import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@ngflix/env/environment';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { MovieModel, ResultModel } from '@ngflix/model';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  private resultSubject = new BehaviorSubject<ResultModel>(null);
  private movieSubject = new BehaviorSubject<MovieModel>(null);  
  private url = `${environment.apiUrl}`;

  public result$ = this.resultSubject.asObservable();  
  public movie$ = this.movieSubject.asObservable();

  public lastPage = 0;

  constructor(private httpClient: HttpClient) {
  }

  public search(title: string, page: number = 1, append: boolean = false): void {
    this.httpClient.get<ResultModel>(`${this.url}s=${title}&type=movie&r=json&v=1&page=${page}`)
      .subscribe((result: ResultModel) => {
        this.lastPage = page;

        if (append) {
          this.resultSubject.pipe(take(1)).subscribe((r: ResultModel) => {
            r.Search.push(...result.Search);

            // TODO: removing this for now, causes unforseen styling issues
            // this.resultSubject.next(r);
          });
        }
        else {
          this.resultSubject.next(result);
        }        
      });
  }

  public getMovieById(imdbID: string): void {
    this.httpClient.get<MovieModel>(`${this.url}i=${imdbID}&type=movie&plot=full&r=json&v=1`)
      .subscribe((movie: MovieModel) => {
        this.movieSubject.next(movie);
      });
  }  
}
