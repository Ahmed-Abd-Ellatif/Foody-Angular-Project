import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { OurFeaturesComponent } from 'src/app/components/our-features/our-features.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent, OurFeaturesComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {}
