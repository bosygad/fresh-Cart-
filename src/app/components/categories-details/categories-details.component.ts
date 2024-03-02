import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent {
  CategoriesDetailsList:any[]=[]
  constructor(private _ProductsService:ProductsService ,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(paramMap)=>{
        console.log(paramMap);
        let idProduct:any = paramMap.get('id')
        this._ProductsService.getCategoriesDetails(idProduct).subscribe({
          next:(response)=>{
            console.log(response);
            this.CategoriesDetailsList = response.data
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
