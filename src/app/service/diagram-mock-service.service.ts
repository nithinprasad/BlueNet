import { Injectable } from '@angular/core';
import { Document } from '../model/Document';
import { IDiagramService } from './IDiagramService';
import { Observable } from 'rxjs';
import { DocumentHistory } from '../model/DocumentHistory';

@Injectable({
  providedIn: 'root'
})
export class DiagramMockServiceService implements IDiagramService {

  private diagramStore: Document[] = [];

  constructor() { }
  getAllDocuments(): Observable<Document[]> {
    throw new Error('Method not implemented.');
  }
  getByDocumentId(id: any): Observable<Document> {
    throw new Error('Method not implemented.');
  }
  getAllRevisionsByDocumentId(id: any): Observable<DocumentHistory[]> {
    throw new Error('Method not implemented.');
  }
  createRevision(id: any): Observable<DocumentHistory> {
    throw new Error('Method not implemented.');
  }
  getRevisionById(id: any, revid: any): Observable<DocumentHistory> {
    throw new Error('Method not implemented.');
  }

}
