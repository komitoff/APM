import { Component , Inject , OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css', ]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List!';
  errorMessage: string;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string = 'cart';
  filteredProducts: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[]; 

  constructor (private _productService: ProductService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
    )
  }

  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {
    this._productService.getProducts()
        .subscribe(products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
          err => this.errorMessage = <any> err
        );
  }
}