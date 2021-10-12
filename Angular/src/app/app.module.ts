import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { myComponent } from './MyComponent/my.component';
import { NovaPoshtaComponent } from './MyComponent/nova-poshta/nova-poshta.component';
import { NovaPoshtaCityComponent } from './MyComponent/nova-poshta-city/nova-poshta-city/nova-poshta-city.component';

@NgModule({
  declarations: [
    AppComponent,
    myComponent,
    NovaPoshtaComponent,
    NovaPoshtaCityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [myComponent]
})
export class AppModule { }
