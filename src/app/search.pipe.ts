import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './shared/interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Product:Products[] , term:string): Products[] {
   return ( Product.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase())) )
  

  }
}