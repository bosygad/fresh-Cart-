import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent {
  cartNumber!:number;
  weshListNumber!:number;
  constructor(private _AuthService:AuthService , private _CartService:CartService){
    _CartService.cartNumber.subscribe({
      next:(response)=>{
        console.log(response);
        this.cartNumber = response
        
      }
    });
    
  }
logOut():void{
this._AuthService.signOut()
}
}
