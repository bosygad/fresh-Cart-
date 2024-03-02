import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishListItem:any[]=[];
  constructor(private _CartService:CartService ,private toastr: ToastrService){}
  
  ngOnInit(): void {
    this.getMyWishList()
   
  }
  
  getMyWishList():void{
    this._CartService.GetItemOfWishlist().subscribe({
      next:(response)=>{
        console.log(response);
        this.wishListItem = response.data
        
      },
      error:(err)=>{console.log(err);
      }
    })
  }
  
  
  
  deleteItemfromWishList(id:string){
  this._CartService.deleteItemInWishlist(id).subscribe({
    next:(response)=>{console.log(response);
  
  
      this.getMyWishList()
   
      
    },
    error:(err)=>{console.log(err);
    }
  })
  }
  
  

  AddtoMyCart(_id:string):void{
    this._CartService.addToCart(_id).subscribe({
      next:(response)=>{
  console.log(response);
  this._CartService.cartNumber.next(response.numOfCartItems)
  
  this.toastr.success(response.message , '',{
  
    closeButton:true,
    progressBar:true,
    progressAnimation:'increasing'
  });
  
      },
  error:(err)=>{
    console.log(err);
    this.toastr.error(err.message , '')
    
  }
    })
  }
}
