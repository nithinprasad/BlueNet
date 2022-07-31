import { Component, OnInit } from '@angular/core';
import { Obj } from '@popperjs/core';

@Component({
  selector: 'app-revision-header',
  templateUrl: './revision-header.component.html',
  styleUrls: ['./revision-header.component.css']
})
export class RevisionHeaderComponent implements OnInit {

  public isTabular: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(e: any) {
    this.isTabular = !e.currentTarget.checked;
  }

}
