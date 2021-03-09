import { MovieRatingModel } from '..';

export class MovieModel {
    public Title: string;
    public Year: number;
    public Rated: string;
    public Released: string;
    public Runtime: string;
    public Genre: string;
    public Director: string;
    public Writer: string;
    public Actors: string;
    public Plot: string;
    public Language: string;
    public Country: string;
    public Awards: string;
    public Poster: string;
    public Ratings: MovieRatingModel[];
    public Metascore: string;
    public imdbRating: string;
    public imdbVotes: string;
    public imdbID: string;
    public Type: string;
    public DVD: string;
    public BoxOffice: string;
    public Production: string;
    public Website: string;
    public Response: boolean;
}
