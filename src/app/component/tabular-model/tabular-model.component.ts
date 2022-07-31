import { Component, OnInit } from '@angular/core';
import { DiagramServiceService } from 'src/app/service/diagram-service.service';

@Component({
  selector: 'app-tabular-model',
  templateUrl: './tabular-model.component.html',
  styleUrls: ['./tabular-model.component.css']
})
export class TabularModelComponent implements OnInit {

  constructor(public diagramService: DiagramServiceService) { }

  ngOnInit(): void {
  }

  findById(id: string) {
    let response = this.diagramService.findById(id);
    if (response) {
      return response.model;
    }
    return [];
  }

  formatDate(date: Date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
  }

}
