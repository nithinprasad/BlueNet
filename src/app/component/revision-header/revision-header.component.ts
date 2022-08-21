import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obj } from '@popperjs/core';
import { DiagramApiService } from 'src/app/service/diagram-service.service';
import { Document } from 'src/app/model/Document';
@Component({
  selector: 'app-revision-header',
  templateUrl: './revision-header.component.html',
  styleUrls: ['./revision-header.component.css']
})
export class RevisionHeaderComponent implements OnInit {

  public isTabular: boolean = true;
  private _document: Document = new Document();
  constructor(private route: ActivatedRoute, private service: DiagramApiService) {
  }

  ngOnInit(): void {
    this.fetchDocumentId();
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

  onCheckboxChange(e: any) {
    this.isTabular = !e.currentTarget.checked;
  }

  set document(value: Document) {
    this._document = value;
  }

  get document() {
    return this._document;
  }

}
