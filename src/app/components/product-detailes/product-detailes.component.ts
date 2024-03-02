import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _DataService:ProductsService , private _CartService:CartService , private toastr: ToastrService){}
  productsDetail:any ={}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(paramMap)=>{
        console.log(paramMap);
        let idProduct:any = paramMap.get('id')
        this._DataService.getDatailes(idProduct).subscribe({
          next:(response)=>{
            console.log(response);
            this.productsDetail = response.data
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
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
}
