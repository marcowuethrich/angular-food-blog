import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog} from '../../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: Blog | undefined;
  @Output() deleted = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(): void {
    if (confirm(`You're about to delete: "${this.blog?.title}"\nAre you sure?`)) {
      this.deleted.emit(this.blog?.id);
    }
  }
}
