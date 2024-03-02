import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private _ProductService: ProductsService,
    private _CartService: CartService,
    private toastr: ToastrService,
    private _ProductsService:ProductsService
   
  ) { }
  productsList: any[] = []
wishList: any[] = []
searchTerm =''
  ngOnInit(): void {
    this.getLoggedUserWishList()
    this._ProductsService.AllProducts().subscribe({
      next:(respose)=>{
        console.log(respose);
        
        this.productsList = respose.data
      },
      error:(err)=>{
        console.log(err);
        
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
  



getLoggedUserWishList() {
  this._CartService.GetItemOfWishlist().subscribe({
    next: (response) => {
      this._CartService.numOfWishListItems.next(response.count)
      this.wishList = response.data.map((product: any) => product._id)
    },
    error: err => console.log(err)
  })
}

addProductToWhishList(productId: string) {
  this._CartService.addProudctToWishlist(productId).subscribe({
    next: (response) => {
      this.getLoggedUserWishList()
      
              this.toastr.success(response.message , '',{
  
          closeButton:true,
          progressBar:true,
          progressAnimation:'increasing'
        })
     
    },
    error: err => console.log(err)
  })
}

removeProductFromWhishList(productId: string) {
  this._CartService.deleteItemInWishlist(productId).subscribe({
    next: (response) => {
      this.getLoggedUserWishList()

      this.toastr.error(response.message , '',{
  
        closeButton:true,
        progressBar:true,
        progressAnimation:'increasing'
      })
   
      
    },
    error: err => console.log(err)
  })
}
}