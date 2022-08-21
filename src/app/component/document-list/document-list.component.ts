import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/model/Document';
import { DiagramApiService } from 'src/app/service/diagram-service.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  private _document: Document[] = [];

  constructor(private service: DiagramApiService) {
    this.service.getAllDocuments().subscribe({
      next: data => {
        this._document = data
      }
    })
  }


  ngOnInit(): void {

  }


  set document(value: Document[]) {
    this._document = value;
  }

  get document() {
    return this._document;
  }

}
