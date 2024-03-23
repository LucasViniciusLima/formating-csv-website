import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'compare-sheets',
  templateUrl: './compare-sheets.component.html'
})
export class CompareSheetsComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      fileToDelete: [null, Validators.required],
      fileBase: [null, Validators.required]
    })
  }

  onSave() {
    console.log(this.formGroup.value);
    console.log('colectForm');
    const { fileBase } = this.formGroup.value;
    console.log(this.colectFormDataFromEvent(fileBase));
  }

  onFileDeleteSelected(event: any) {
    const formData = this.colectFormDataFromEvent(event);
    //this.formGroup.patchValue({ fileToDelete: formData });
  }

  onFileBaseSelected(event: any) {
    const formData = this.colectFormDataFromEvent(event);
    //this.formGroup.patchValue({ fileBase: formData });
  }

  colectFormDataFromEvent(event: any): FormData {
    const selectedFile = <FileList>event.srcElement.files;
    const formData = new FormData();

    if (selectedFile.length > 0) {
      console.log(selectedFile[0].type);
      formData.append('file', selectedFile[0], selectedFile[0].name);
    }

    return formData;
  }

}
