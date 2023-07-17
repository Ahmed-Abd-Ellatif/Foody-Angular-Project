import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  tempId: any;
  product: any;
  constructor(
    private _route: ActivatedRoute,
    private _service: AlldataService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((res) => {
      this.tempId = res['id'];
    });
    this.product = this._service.productsData.filter(
      (el) => el.id === this.tempId
    );
  }
}
