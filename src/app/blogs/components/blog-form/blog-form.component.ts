import {Component, OnInit} from '@angular/core';
import {Blog} from '../../model/blog';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FoodBlogService} from '../../services/food-blog.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogId: string | undefined;
  blog: Blog | undefined;
  blogForm: FormGroup = new FormGroup({});
  options = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private foodBlogService: FoodBlogService) {
  }

  // tslint:disable-next-line:typedef
  get fc() {
    return this.blogForm.controls;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.blogId = params.id;
        this.foodBlogService.fetchById(params.id).subscribe(blog => {
          this.blog = blog;
          this.createBlogForm();
        });
      } else {
        this.createBlogForm();
      }
    });
  }

  isFormValid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  createBlogForm(): void {
    this.blogForm = new FormGroup({
      title: new FormControl(this.blog ? this.blog.title : '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(128)]),
      subTitle: new FormControl(this.blog ? this.blog.subTitle : '',
        [Validators.required, Validators.minLength(3),
          Validators.maxLength(128)]),
      author: new FormControl(this.blog ? this.blog.author : '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(128)]),
      imageURL: new FormControl(this.blog ? this.blog.imageURL : '',
        [Validators.required, Validators.minLength(8)]),
      active: new FormControl(this.blog ? this.blog.active : true),
      content: new FormControl(this.blog ? this.blog.content : '', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.blogId && this.blog) {
      this.foodBlogService.update({
        id: this.blogId,
        title: this.blogForm.value.title,
        subTitle: this.blogForm.value.subTitle,
        author: this.blogForm.value.author,
        content: this.blogForm.value.content,
        imageURL: this.blogForm.value.imageURL,
        active: this.blogForm.value.active,
        created: this.blog.created,
        updated: new Date(Date.now()).toLocaleDateString()
      }).subscribe(() => {
        this.router.navigate(['/blogs']).then(() => {
          // TODO show msg successfully created
        });
      }, error => {
        // TODO show error msg to the user
        console.error(error);
      });
    } else {
      this.foodBlogService.create({
        id: uuidv4(),
        title: this.blogForm.value.title,
        subTitle: this.blogForm.value.subTitle,
        author: this.blogForm.value.author,
        content: this.blogForm.value.content,
        imageURL: this.blogForm.value.imageURL,
        active: this.blogForm.value.active,
        created: new Date(Date.now()).toLocaleDateString(),
        updated: new Date(Date.now()).toLocaleDateString()
      }).subscribe(() => {
        this.router.navigate(['/blogs']).then(() => {
          // TODO show msg successfully created
        });
      }, error => {
        // TODO show error msg to the user
        console.error(error);
      });
    }
  }
}
