import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FileService } from './providers/file.service';
@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [FileService],
})
export class CoreModule { }
