import { Injectable } from '@angular/core';
import { PRODUCT_ITEMS } from './product/products-list';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productItems = PRODUCT_ITEMS;
  /*
  getAllProducts(): Product[] {
    return this.productItems;
  }*/

  constructor() { }
}
