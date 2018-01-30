import { IFile } from './../models/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FileService {
  private _files: BehaviorSubject<Array<IFile>> = new BehaviorSubject(new Array());
  constructor() { }
  get files() {
    return this._files.asObservable();
  }
  getFiles() {
    this._files.next([{
      name: 'Janeto',
      date: new Date(Date.now()),
      members: ['Kian', 'Henry'],
      other: 'other'
    }, {
      name: 'Laptrinhvien',
      date: new Date(Date.now()),
      members: ['Quynh', 'Ha']
    }, {
      name: 'WowKid',
      date: new Date(Date.now()),
      members: []
    }]);
  }
  search(keyword) {
    console.log(this.files);
    this._files.next(this._files.getValue().filter(
      f => f.name.toLocaleLowerCase().includes(keyword.toLowerCase()
      )));
  }
}
