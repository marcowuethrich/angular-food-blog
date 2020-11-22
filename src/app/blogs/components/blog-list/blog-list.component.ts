import {Component, OnInit} from '@angular/core';
import {Blog} from '../../model/blog';
import {FoodBlogService} from '../../services/food-blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private foodBlogService: FoodBlogService) {
  }

  ngOnInit(): void {
    this.foodBlogService.fetch().subscribe(blogs => this.blogs = blogs);
  }

  removeBlog(id: string): void {
    this.foodBlogService.delete(id).subscribe(() => {
      this.blogs = this.blogs.filter(blog => blog.id !== id);
    }, error => {
      console.error(error);
      // TODO show api error
    });
  }
}
