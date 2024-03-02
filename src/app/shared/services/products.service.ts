import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string ="https://ecommerce.routemisr.com"
  constructor(private _HttpClient:HttpClient) { }

  AllProducts():Observable<any>{
return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)
  }
  getDatailes(idProduct:string):Observable<any>{
return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${idProduct}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`)
      }
      getCategoriesDetails(id:string):Observable<any>{
        return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      }
      getAllbrands():Observable<any>{
        return this._HttpClient.get(`${this.baseUrl}/api/v1/brands`)
          }

          getBrandDetailes(id:string):Observable<any>{
            return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
          }

          getAllOrders():Observable<any>{
            return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders`)
          }

          getUserOrders(id:string):Observable<any>{
            return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
          }
}
