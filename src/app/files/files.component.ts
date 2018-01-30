import { IFile } from './../models/IFile';
import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FileService } from '../providers/file.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit, OnDestroy, OnChanges {
  files: IFile[];
  temp: IFile[];
  title: String = 'JANETO';
  keyword: String = '';
  constructor(private _fileService: FileService) {
    this._fileService.getFiles();
    this._fileService.files.subscribe(files => this.files = files);
  }

  download: any = (title: String) => {
    this.title = title;
  }

  search() {
    this._fileService.search(this.keyword);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnChanges() {
  }


}
