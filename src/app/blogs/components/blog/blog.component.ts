import {Component, Input, OnInit} from '@angular/core';
import {Blog} from '../../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: Blog | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(): void {
    if (confirm(`You're about to delete: "${this.blog?.title}"\nAre you sure?`)) {
      // TODO delete blog entry
      console.log('delete sure !');
    }
  }
}
