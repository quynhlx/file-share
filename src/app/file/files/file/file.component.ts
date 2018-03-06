import { IFile } from './../../../models/IFile';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file: IFile
  @Output() onDownload: EventEmitter<String> = new EventEmitter<String>();
  @Input() onDownload2: any;
  constructor() { }

  ngOnInit() {
  }

  download(title: String){
    console.log(title);
    // this.onDownload.emit(title);
    this.onDownload2(title);
  }
}
