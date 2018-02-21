import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PhonesComponent }  from './phones';

@NgModule({
  declarations: [PhonesComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [PhonesComponent]
})
export class AppModule { }
