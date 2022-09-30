import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obj } from '@popperjs/core';
import { DiagramApiService } from 'src/app/service/diagram-service.service';
import { Document } from 'src/app/model/Document';
import { DocumentHistory } from 'src/app/model/DocumentHistory';
@Component({
  selector: 'app-revision-header',
  templateUrl: './revision-header.component.html',
  styleUrls: ['./revision-header.component.css']
})
export class RevisionHeaderComponent implements OnInit {

  public isTabular: boolean = true;
  public isCreateFlow: boolean = false;
  private _document: Document = new Document();
  private _revisons: DocumentHistory[] = [];
  constructor(private route: ActivatedRoute, private service: DiagramApiService) {
  }

  ngOnInit(): void {
    this.fetchDocumentId();
    this.fetchHistory();
  }

  fetchDocumentId() {
    let documentId = this.route.snapshot.paramMap.get('id');
    if (documentId) {
      this.service.getByDocumentId(documentId).subscribe({
        next: data => {
          this._document = data
        }
      })

    }
    return this._document;
  }

  fetchHistory() {
    let documentId = this.route.snapshot.paramMap.get('id');
    this.service.getAllRevisionsByDocumentId(documentId).subscribe({
      next: data => {
        this._revisons = data
      }
    })
  }

  onCheckboxChange(e: any) {
    this.isTabular = !e.currentTarget.checked;
  }

  set document(value: Document) {
    this._document = value;
  }

  get document() {
    return this._document;
  }


  set revisons(value: DocumentHistory[]) {
    this._revisons = value;
  }

  get revisons() {
    return this._revisons;
  }

  public doRevise() {
    this.isCreateFlow = !this.isCreateFlow;
  }

  myCallbackFunction = (): void => {
    this.isTabular = false
  }


}
