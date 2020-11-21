import {Component, OnInit} from '@angular/core';
import {Blog} from '../../model/blog';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogId: string | undefined;
  blogForm: FormGroup = this.createBlogForm(undefined);
  options = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.blogId = params.id;
        // TODO fetch blog
        this.blogForm = this.createBlogForm(undefined);
      }
    });
  }



  createBlogForm(blog?: Blog): FormGroup {
    return this.fb.group({
      title: [blog ? blog.title : '', Validators.required, Validators.minLength(3), Validators.maxLength(48)],
      subTitle: [blog ? blog.subTitle : '', Validators.required, Validators.minLength(3), Validators.maxLength(128)],
      author: [blog ? blog.author : '', Validators.required, Validators.minLength(3), Validators.maxLength(128)],
      imageURL: [blog ? blog.imageURL : '', Validators.required, Validators.minLength(8)],
      content: [blog ? blog.content : '']
    });
  }
}
