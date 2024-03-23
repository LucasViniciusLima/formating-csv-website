import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareSheetsComponent } from './compare-sheets.component';
import { CompareSheetsRoutingModule } from './compare-sheets-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CompareSheetsComponent
  ],
  imports: [
    CommonModule,
    CompareSheetsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CompareSheetsModule { }
