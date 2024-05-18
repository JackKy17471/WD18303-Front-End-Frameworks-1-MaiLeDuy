import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { StarComponent } from './pages/star/star.component';
import { DialogComponent } from './pages/product/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StarComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
