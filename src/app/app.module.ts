import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomInterceptor} from '../interceptor/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*按需引入组件*/
    NzGridModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
