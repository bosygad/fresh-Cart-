import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './../services/loader.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    if(localStorage.getItem('eToken') != null){
  let headers:any={
    token:localStorage.getItem('eToken')
  }
  request = request.clone({
    setHeaders:headers
  });

};
    return next.handle(request).pipe(finalize(() => this.loaderService.hide()),
);
  }
}
