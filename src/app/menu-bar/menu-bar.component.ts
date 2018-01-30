import { Component, OnInit } from '@angular/core';
import { FileService } from '../providers/file.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  keyword: String = '';
  constructor(private _fileService: FileService) { }

  ngOnInit() {
  }
  search() {
    this._fileService.search(this.keyword);
  }
}
