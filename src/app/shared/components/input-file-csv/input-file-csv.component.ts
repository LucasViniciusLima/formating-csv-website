import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AbstractComponent } from '../../../core/components/abstract.component';

@Component({
  selector: 'input-file-csv',
  templateUrl: './input-file-csv.component.html'
})
export class InputFileCsvComponent extends AbstractComponent {

  @Input() public myId!: string;
  @Output('onSelect') onSelectFileEmitter = new EventEmitter<any>();

  constructor(injector: Injector) {
    super(injector);
  }

  onFileSelected(event: any) {
    const selectedFile = <FileList>event.srcElement.files;
    const formData = new FormData();

    if (selectedFile.length > 0) {
      //console.log(selectedFile[0].type);
      formData.append('file', selectedFile[0], selectedFile[0].name);
    }

    this.onSelectFileEmitter.emit(formData);
  }

}
