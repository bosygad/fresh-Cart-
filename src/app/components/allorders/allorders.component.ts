import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Products } from 'src/app/shared/interfaces/products';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
// import { Products } from './../../shared/interfaces/products';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{

constructor (private _CartService:CartService ,private _AuthService:AuthService) { }
userId:string = '';
orders:any []= [];

ngOnInit(): void {
    let token = localStorage.getItem('eToken')||'';
    let encodeToken:any= jwtDecode(token);
    this.userId = encodeToken.id;
    this._CartService.getAllUserOrders(this.userId).subscribe({
      next:res=>{
        console.log(res);
        this.orders = res;
      } , 
      error:err=>{
        console.log(err);
      }
    })
}

}

