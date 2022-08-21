import { Component, Input, OnInit } from '@angular/core';
import { DocumentHistory } from 'src/app/model/DocumentHistory';

@Component({
  selector: 'app-side-steps',
  templateUrl: './side-steps.component.html',
  styleUrls: ['./side-steps.component.css']
})
export class SideStepsComponent implements OnInit {

  @Input() lastRevsion!: DocumentHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
