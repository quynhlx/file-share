import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'home', component: LayoutComponent, children: [{
    path: '', loadChildren: './file/file.module#FileModule'
  }]},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [];
