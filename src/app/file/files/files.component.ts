import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../../core/providers/file.service';
import { IFile } from '../../models/IFile';
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
  query = {
    'search': '',
    'parentId': 'root'
  };
  constructor(private _fileService: FileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  download: any = (title: String) => {
    this.title = title;
  }

  search() {
    this._fileService.search(this.keyword);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || 'root';
    
    this.query.parentId = id;
    this._fileService.getFiles(this.query);
    
    this._fileService.files.
      subscribe((files) => {
        this.files = files
      });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnChanges() {
  }

  goToFolder(file: IFile) {
    this._fileService.getFiles({
      'search': '',
      'parentId': file._id
    });
  }


}