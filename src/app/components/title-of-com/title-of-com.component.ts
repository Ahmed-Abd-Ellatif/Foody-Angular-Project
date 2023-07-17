import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-of-com',
  templateUrl: './title-of-com.component.html',
  styleUrls: ['./title-of-com.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TitleOfComComponent {
  @Input() title: string = '';
}
