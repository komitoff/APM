import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    
  }

}
