import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { TrashComponent } from './trash/trash.component';


const routes: Routes = [
    {path: '', redirectTo: 'files', pathMatch: 'full'},
    {path: 'files', component: FilesComponent},
    {path: 'files/:id', component: FilesComponent},
    {path: 'trash', component: TrashComponent},
    {path: 'trash/:id', component: TrashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileRoutingModule { }

export const routedComponents = [];