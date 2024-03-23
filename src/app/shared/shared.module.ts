import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileCsvComponent } from './components/input-file-csv/input-file-csv.component';


const COMPONENTS = [
  InputFileCsvComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
