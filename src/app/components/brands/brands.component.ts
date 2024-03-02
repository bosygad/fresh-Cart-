import { Component } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  constructor(private _ProductsService:ProductsService){}
  brandsList:any[]=[]
  ngOnInit(): void {
    this._ProductsService.getAllbrands().subscribe({
      next:(response)=>{
        console.log(response);
        this.brandsList = response.data
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
}
}
