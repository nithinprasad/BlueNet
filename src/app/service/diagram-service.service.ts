import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentHistory } from '../model/DocumentHistory';
import { Document } from "../model/Document";
import { IDiagramService } from "./IDiagramService"
@Injectable({
  providedIn: 'root'
})
export class DiagramApiService implements IDiagramService {

  constructor(private http: HttpClient) { }

  public getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>("api/documents");
  }

  public getByDocumentId(id: any): Observable<Document> {
    return this.http.get<Document>(`api/documents/${id}`,);
  }

  public getAllRevisionsByDocumentId(id: any): Observable<DocumentHistory[]> {
    return this.http.get<DocumentHistory[]>(`api/documents/${id}/revisions`);
  }

  public createRevision(id: any, history: any): Observable<DocumentHistory> {
    let params = new HttpParams().set('id', id);
    let res = this.http.post<DocumentHistory>(`api/documents/${id}/revisions`, history);
    console.log(res);
    return res;
  }

  public getRevisionById(id: any, revid: any): Observable<any> {

    return this.http.get<any>(`api/documents/${id}/revisions/${revid}`);
  }
}
