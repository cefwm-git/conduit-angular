import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  {
    path: 'register',
    component: AuthComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'home',
    children: [
      {
        path: 'global-feed',
        component: ArticleListComponent
      },
      {
        path: 'my-feed',
        component: ArticleListComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'global-feed'
      }
    ],
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
