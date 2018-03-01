import { HomeGuard } from './services/home-guard.service';
import { MemberPipe } from './pipes/member.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FileService } from './providers/file.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { TrashComponent } from './trash/trash.component';
import { AppRoutingModule } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    MemberPipe,
    FileComponent,
    MenuBarComponent,
    LoginComponent,
    PageNotFoundComponent,
    LayoutComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [FileService, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
