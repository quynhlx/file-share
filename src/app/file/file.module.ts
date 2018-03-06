import { TrashComponent } from './trash/trash.component';
import { FileComponent } from './files/file/file.component';
import { NgModule } from '@angular/core';
import { FilesComponent } from './files/files.component';
import { FileRoutingModule } from './file.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [FileRoutingModule, SharedModule],
    exports: [],
    declarations: [FilesComponent, FileComponent, TrashComponent],
    providers: [],
})
export class FileModule { }
