import { ProductService } from '@core/services/product/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '@core/model/product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-top',
  templateUrl: './product-top.component.html',
  styleUrls: ['./product-top.component.css']
})
export class ProductBestSellerComponent implements OnInit {

  constructor(private readonly productService: ProductService) { }
  listProduct: Product[] = [];

  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      }
    },
    nav: true,
    navText: ['<', '>']
  };

  ngOnInit() {
    this.productService.getProductBestSellerByStore().subscribe(res => {
      if (res.code === 'OK') {
        this.listProduct = res.data;
      }
    });
  }

}