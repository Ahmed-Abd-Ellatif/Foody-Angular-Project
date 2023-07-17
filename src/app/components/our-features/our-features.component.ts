import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-our-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-features.component.html',
  styleUrls: ['./our-features.component.scss'],
})
export class OurFeaturesComponent implements OnInit {
  features: any = [];
  constructor(private _service: AlldataService) {}
  ngOnInit(): void {
    this.features = this._service.featuresData;
  }
}
