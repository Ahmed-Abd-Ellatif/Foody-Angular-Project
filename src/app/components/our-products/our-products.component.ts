import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlldataService } from 'src/app/services/alldata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss'],
})
export class OurProductsComponent implements OnInit {
  products: any = [];
  isActive = 'all';
  productFilter = this.products;
  tempId: any = [];
  constructor(private _service: AlldataService, private _router: Router) {}
  ngOnInit(): void {
    this.products = this._service.productsData;
    this.productFilter = this.products;
  }

  onFilter(str: string) {
    if (str === 'all') {
      this.productFilter = this.products;
    } else {
      this.productFilter = this.products.filter((el: any) => el.type === str);
    }
    this.isActive = str;
  }
  onViewDetails(id: any) {
    this._router.navigate(['products/' + id]);
  }
}
