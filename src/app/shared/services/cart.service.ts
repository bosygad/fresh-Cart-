import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string ='https://ecommerce.routemisr.com'
  cartNumber = new BehaviorSubject(0);
  // weshListNumber = new BehaviorSubject(0);
  numOfWishListItems: BehaviorSubject<any> = new BehaviorSubject(0)
  
    constructor(private _HttpClient:HttpClient) { 
      this.getItemOfCart().subscribe({
        next:(response)=>{console.log(response);
          this.cartNumber.next(response.numOfCartItems)
        }
      })
    }
  
    addToCart(id:string):Observable<any> {
      return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
      {
        productId:id
      })
    }
  
    getItemOfCart():Observable<any> {
      return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`)
    }
  
    updateCart(count:number,id:string):Observable<any> {
      return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,{
        count:count
      })
    }
  
    deleteItemInCart(id:string):Observable<any> {
      return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`)
    }
  
    deleteAllCart():Observable<any> {
      return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`)
    }
  
    checkout(id:string , formData:any):Observable<any> {
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
        shipingAdress : formData
      })
    }
  
    addProudctToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,{
      productId:id
    })
    }
  
    GetItemOfWishlist():Observable<any>{
      return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`)
    };
     
      deleteItemInWishlist(id:string):Observable<any> {
        return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${id}`)
      }
  

      getAllUserOrders(userId: string): Observable<any> {
        return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${userId}`)
      }
      deleteItemfromOrders(id:string):Observable<any> {
        return this._HttpClient.delete(`${this.baseUrl}/api/v1/orders/user/${id}`)
      }
}
