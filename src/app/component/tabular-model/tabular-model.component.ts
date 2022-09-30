import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/model/Document';
import { DocumentHistory } from 'src/app/model/DocumentHistory';
import { DiagramApiService } from 'src/app/service/diagram-service.service';

@Component({
  selector: 'app-tabular-model',
  templateUrl: './tabular-model.component.html',
  styleUrls: ['./tabular-model.component.css']
})
export class TabularModelComponent implements OnInit {

  @Input() document!: Document;
  revisons: DocumentHistory[] = [];

  @Input()
  callbackFunction!: () => void;

  constructor(public service: DiagramApiService) { }

  ngOnInit(): void {
    this.service.getAllRevisionsByDocumentId(this.document.id).subscribe({
      next: data => {
        this.revisons = data
      }
    })
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
