import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-latest-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.scss'],
})
export class LatestBlogComponent implements OnInit {
  blogs: any = [];
  constructor(private _service: AlldataService) {}
  ngOnInit(): void {
    this.blogs = this._service.blogData;
  }
}
