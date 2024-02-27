import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareSheetsComponent } from './compare-sheets.component';
import { CompareSheetsRoutingModule } from './compare-sheets-routing.module';



@NgModule({
  declarations: [
    CompareSheetsComponent
  ],
  imports: [
    CommonModule,
    CompareSheetsRoutingModule
  ]
})
export class CompareSheetsModule { }
