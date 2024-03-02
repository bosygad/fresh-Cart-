import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string ='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient , private _Router:Router ) { }
userData:any;
  setRegister(userData:object):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup' ,userData)
  }

  setLogin(userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , userData )
  }

  ForgetPassword(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,userData)
    }

    verifyCode(userData:object):Observable<any>{
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,userData)
      }
      ResetPassword(userData:object):Observable<any>{
        return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,userData)
        }
      
        saveUserData(){
          if(localStorage.getItem('eToken') !=null){
            let encodeToken:any = localStorage.getItem('eToken');
           let decodeToken = jwtDecode(encodeToken)
        this.userData = decodeToken
           console.log(this.userData);
           
          }
        }

        signOut():void{
          localStorage.removeItem('eToken')
          this._Router.navigate(['/login'])
        }
}
