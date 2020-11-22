import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './components/overview/overview.component';
import {BlogsRoutingModule} from './blogs-routing.module';
import {BlogComponent} from './components/blog/blog.component';
import {BlogFormComponent} from './components/blog-form/blog-form.component';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    OverviewComponent,
    BlogComponent,
    BlogFormComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogsRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ]
})
export class BlogsModule {
}
