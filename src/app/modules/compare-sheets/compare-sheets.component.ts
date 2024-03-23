import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractComponent } from '../../core/components/abstract.component';
import { InputFileCsvComponent } from '../../shared/components/input-file-csv/input-file-csv.component';

@Component({
  selector: 'compare-sheets',
  templateUrl: './compare-sheets.component.html'
})
export class CompareSheetsComponent extends AbstractComponent implements OnInit {

  @ViewChild(InputFileCsvComponent) inputFileCsvDelete!: InputFileCsvComponent;
  @ViewChild(InputFileCsvComponent) inputFileCsvBase!: InputFileCsvComponent;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      fileToDelete: [null, Validators.required],
      fileBase: [null, Validators.required]
    });
  }

  onSave() {
    const { fileToDelete, fileBase } = this.formGroup.value;
    /*
    pronto para fazer a requisição imagino eu :)

     */
  }

  onSelectDelete(event: FormData) {
    this.formGroup.patchValue({ fileToDelete: event });
  }

  onSelectBase(event: FormData) {
    this.formGroup.patchValue({ fileBase: event });
  }
}
