import { MemberPipe } from './pipes/member.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FileService } from './providers/file.service';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    MemberPipe,
    FileComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
