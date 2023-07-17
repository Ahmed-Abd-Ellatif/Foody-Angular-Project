import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { BestOrganicComponent } from 'src/app/components/best-organic/best-organic.component';
import { OurFeaturesComponent } from 'src/app/components/our-features/our-features.component';
import { VisitOurFirmComponent } from 'src/app/components/visit-our-firm/visit-our-firm.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    TitleOfComComponent,
    BestOrganicComponent,
    VisitOurFirmComponent,
    OurFeaturesComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
