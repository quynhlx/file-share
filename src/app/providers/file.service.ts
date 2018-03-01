import { IFile } from './../models/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class FileService {
  private _files: BehaviorSubject<Array<IFile>> = new BehaviorSubject(new Array());
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  get files() {
    return this._files.asObservable();
  }
  getFiles(body) {
    return this.http.post('http://fisa.lexuanquynh.com/api/file/find', body).map(data => {
       this._files.next(data as IFile[]);
      //  this.toastr.success('Thanh cong', 'Du lieu da duoc tai ve');
       return data;
    }).catch(error => {
        this.toastr.error(error.message, 'That bai');
        return error;
    }).subscribe();
    // .subscribe (res => {
    //    var data = res.json();
    //    this._files.next(data);
    //   });
  }
  search(keyword) {
    console.log(this.files);
    this._files.next(this._files.getValue().filter(
      f => f.name.toLocaleLowerCase().includes(keyword.toLowerCase()
      )));
  }
}
