import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {BlogFormComponent} from './components/blog-form/blog-form.component';
import {MainLayoutComponent} from '../shared/layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OverviewComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: BlogFormComponent,
      },
      {
        path: 'update/:id',
        component: BlogFormComponent,
      },
      {
        path: '**',
        redirectTo: '/blogs'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/blogs'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {
}
