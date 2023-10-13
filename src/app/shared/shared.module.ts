import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletDataPipe } from './pipes/outlet-data.pipe';
const component = [OutletDataPipe];

@NgModule({
  declarations: [...component],
  imports: [CommonModule],
  exports: [...component],
})
export class SharedModule {}
