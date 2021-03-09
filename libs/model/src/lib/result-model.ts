import { MovieModel } from '..';

export class ResultModel {
    public Response: boolean;
    public totalResults: number;
    public Search: MovieModel[];
}
