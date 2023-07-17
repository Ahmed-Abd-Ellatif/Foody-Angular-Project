import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { LatestBlogComponent } from 'src/app/components/latest-blog/latest-blog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent, LatestBlogComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {}
