import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// Helper
import Oke from './helpers/oke';

// Fake api
import {
    ArticleListDataJson,
    ArticleDataJson,
    ProductDataJson,
    UserDataJson
} from '../mock';

import { environment } from '../../../environments/environment';
@Injectable()
export class FakeBackEndInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const { url, method, headers, body, urlWithParams } = request;
        // // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            console.log(
                '[FakeBackEndInterceptor] handleRoute: ',
                urlWithParams
            );
            let params = [];
            let page = '0';
            try {
                params = urlWithParams.split('?')[1].split('&');
                if (params.length > 0) {
                    params.forEach(el => {
                        let param = el.split('=');
                        if (param[0] == 'page') {
                            page = param[1];
                        }
                    });
                }
            } catch (error) {
                console.log('[Fake BE] No params');
            }
            let id = /[^/]*$/.exec(url).toString();

            switch (true) {
                case url.endsWith('/articles') && method === 'GET':
                    return getArticles();
            }
        }

        // get data finction

        function getArticles() {
            return Oke(ArticleListDataJson);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackEndInterceptor,
    multi: true
};
