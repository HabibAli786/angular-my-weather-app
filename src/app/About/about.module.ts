import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  exports: [
      AboutComponent
  ],
  providers: [],
  bootstrap: [AboutModule]
})
export class AboutModule { }
