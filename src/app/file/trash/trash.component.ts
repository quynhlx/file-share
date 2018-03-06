import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const value = this.route.snapshot.paramMap.get('id');
    const search = this.route.snapshot.paramMap.get('search');
    alert(search);
  }

}
