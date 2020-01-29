import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  constructor( private productService: ProductService ) {
    this.products = this.productService.getAllProducts();

   }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getAllProducts();
  }


}
