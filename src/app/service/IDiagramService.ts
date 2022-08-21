import { Observable } from "rxjs"
import { Document } from "../model/Document";
import { DocumentHistory } from "../model/DocumentHistory";

export interface IDiagramService {
    getAllDocuments(): Observable<Document[]>;
    getByDocumentId(id: any): Observable<Document>;
    getAllRevisionsByDocumentId(id: any): Observable<DocumentHistory[]>;
    createRevision(id: any, history: any): Observable<DocumentHistory>;
    getRevisionById(id: any, revid: any): Observable<DocumentHistory>;
}