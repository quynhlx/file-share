import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilesComponent } from './files/files.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LayoutComponent, children: [
      {path: '', redirectTo: 'files', pathMatch: 'full'},
      {path: 'files', component: FilesComponent},
      {path: 'files/:id', component: FilesComponent},
      {path: 'trash', component: TrashComponent}
  ] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [LoginComponent];