import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent {
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
