import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private _http:HttpClient) { }
  public getProducts():Observable<Product[]>{
    return this._http.get<any>(`${this.apiServerUrl}/product/all`);
  }

  public addProduct(product:Product):Observable<Product>{
    return this._http.post<Product>(`${this.apiServerUrl}/product/add`,product);
  }

  public updateProduct(product:Product):Observable<Product>{
    return this._http.put<Product>(`${this.apiServerUrl}/product/update`,product);
  }

  public deleteProduct(prodID:Product):Observable<void>{
    return this._http.delete<void>(`${this.apiServerUrl}/product/delete/${prodID}`);
  }
}
