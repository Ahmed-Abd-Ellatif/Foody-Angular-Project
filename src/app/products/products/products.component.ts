import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { OurProductsComponent } from 'src/app/components/our-products/our-products.component';
import { VisitOurFirmComponent } from 'src/app/components/visit-our-firm/visit-our-firm.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TitleOfComComponent,
    OurProductsComponent,
    VisitOurFirmComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {}
