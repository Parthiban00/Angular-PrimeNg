import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderComponent } from './component/http-loader/http-loader.component';

@NgModule({
  declarations: [
    HttpLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpLoaderComponent
  ]
})
export class SharedModule { }
