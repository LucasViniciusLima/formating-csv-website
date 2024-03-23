import { Component, Injector } from '@angular/core';
import { AbstractComponent } from '../../../core/components/abstract.component';

@Component({
  selector: 'input-file-csv',
  templateUrl: './input-file-csv.component.html'
})
export class InputFileCsvComponent extends AbstractComponent {


  constructor(injector: Injector) {
    super(injector);
  }

  onFileSelected(event: any) {
    const selectedFile = <FileList>event.srcElement.files;
    const formData = new FormData();

    if (selectedFile.length > 0) {
      console.log(selectedFile[0].type);
      formData.append('file', selectedFile[0], selectedFile[0].name);
    }

    ///this.formGroup.patchValue({ file: formData }); send tho element father
  }

}
