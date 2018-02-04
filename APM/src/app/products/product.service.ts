import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

import { IProduct } from "./product";

@Injectable()
export class ProductService {
  private _url = '../../api/products/products.json'

  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._url)
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}