import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [],
})
export class AppComponent {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data));
  }
}
