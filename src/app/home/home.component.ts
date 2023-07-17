import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestOrganicComponent } from '../components/best-organic/best-organic.component';
import { OurFeaturesComponent } from '../components/our-features/our-features.component';
import { VisitOurFirmComponent } from '../components/visit-our-firm/visit-our-firm.component';
import { OurProductsComponent } from '../components/our-products/our-products.component';
import { LatestBlogComponent } from '../components/latest-blog/latest-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BestOrganicComponent,
    OurFeaturesComponent,
    VisitOurFirmComponent,
    OurProductsComponent,
    LatestBlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
