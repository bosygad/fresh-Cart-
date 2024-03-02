import { Component } from '@angular/core';
import { Category, Products } from 'src/app/shared/interfaces/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  searchTerm:string =''
  CategoriesList:any;
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
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
  
  getCategoriesDetails(id:string):void{
    this._ProductsService.getCategoriesDetails(id).subscribe({
      next:(res)=>{console.log(res);
      },
    })
  }
}
