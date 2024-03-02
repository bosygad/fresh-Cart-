import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.scss']
})
export class BrandsDetailsComponent {
  BrandDetailsList:any ={}

  constructor(private _ProductsService:ProductsService ,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(paramMap)=>{
        console.log(paramMap);
        let id:any = paramMap.get('id')
        this._ProductsService.getBrandDetailes(id).subscribe({
          next:(response)=>{
            console.log(response);
            this.BrandDetailsList = response.data
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
}
