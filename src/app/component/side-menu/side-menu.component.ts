import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/model/Document';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input() document!: Document;
  constructor() { }

  ngOnInit(): void {
  }

}
