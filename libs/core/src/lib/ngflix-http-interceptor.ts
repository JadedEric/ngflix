import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@ngflix/env/environment';

@Injectable()
export class NgflixHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const clone = req.clone({
            url: `${req.url}&apikey=${environment.apiKey}`
        });
        
        return next.handle(clone)
            .pipe(map((event: HttpEvent<any>) => {

                return event;
            }));
    }
}
