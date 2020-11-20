import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full'
  },
  {
    path: 'blogs',
    pathMatch: 'full',
    component: MainLayoutComponent,
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: '**',
    redirectTo: '/blogs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
