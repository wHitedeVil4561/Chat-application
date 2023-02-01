import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports:[
    MatIconModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
