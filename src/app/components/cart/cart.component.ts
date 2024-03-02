import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItem:any;
constructor(private _CartService:CartService){}
 
ngOnInit(): void {
  this.getMyCart()
 
}

getMyCart():void{
  this._CartService.getItemOfCart().subscribe({
    next:(response)=>{
      console.log(response);
      this.cartItem = response.data
      
    },
    error:(err)=>{console.log(err);
    }
  })
}

updateItemInCart(count:number , id:string){
  if(count == 0){
    this.RemoveItem(id)
  }
  this._CartService.updateCart(count ,id).subscribe({
    next:(response)=>{console.log(response);
      this.cartItem = response.data
    },
    error:(err)=>{console.log(err);
    }
  })
}

RemoveItem(id:string){
this._CartService.deleteItemInCart(id).subscribe({
  next:(response)=>{console.log(response);

    this.cartItem = response.data
    this._CartService.cartNumber.next(response.numOfCartItems)
  },
  error:(err)=>{console.log(err);
  }
})
}

RemoveAllCart(){
  this._CartService.deleteAllCart().subscribe({
    next:(response)=>{
      
      this.cartItem = response
      response.numOfCartItems = 0
      response.totalCartPrice = 0

      this._CartService.cartNumber.next(0)
      console.log('res',response);
      
    },
    error:(err)=>{console.log(err);
    }
  })
}
}
