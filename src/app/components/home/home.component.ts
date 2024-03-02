import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/shared/interfaces/products';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  serchTerm:string =''
  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private toastr: ToastrService){}
  products:any[]=[]
  CategoriesList:any[]=[]
  wishList:any[]=[]
  ngOnInit():void{
    this.getLoggedUserWishList()
    this._ProductsService.AllProducts().subscribe({
      next:(response)=>{
  console.log(response);
  this.products =response.data
      },
      error:(err)=>{
  console.log(err);
  
      }
    })
    this.getAllCategories()
  }
  
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  
  getAllCategories():void{
    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        console.log(response);
        this.CategoriesList = response.data
        
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
