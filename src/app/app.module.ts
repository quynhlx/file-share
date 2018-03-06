import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FileModule } from './file/file.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
