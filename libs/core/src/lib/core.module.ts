import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgflixHttpInterceptor } from './ngflix-http-interceptor';
import { RatingPipe } from './rating.pipe';
import { SplitStringPipe } from './split-string.pipe';

@NgModule({
  imports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NgflixHttpInterceptor,
    multi: true 
  }],
  declarations: [RatingPipe, SplitStringPipe],
  exports: [RatingPipe, SplitStringPipe]
})
export class CoreModule {}
