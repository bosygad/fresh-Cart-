import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  CardId:string = ''
  constructor(private _CartService:CartService){}
ngOnInit(): void {
  this.getMyCart()
}
  getMyCart():void{
    this._CartService.getItemOfCart().subscribe({
      next:(response)=>{
        console.log(response);
       console.log( this.CardId = response.data._id);
       response.numOfCartItems = 0
       response.totalCartPrice = 0
       
        this.CardId = response.data._id
        
        
      },
      error:(err)=>{console.log(err);
      }
    })
  }
  

  CheckOut = new FormGroup({
    details:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    
  })

  payment(form : FormGroup){
console.log(form.value);
this._CartService.checkout(this.CardId, form.value).subscribe({
  next:(response)=>{console.log(response);
    window.location = response.session.url
    response.numOfCartItems = 0
    response.totalCartPrice = 0
  },
  error:(err)=>{console.log(err);
  }
})

  }
}
