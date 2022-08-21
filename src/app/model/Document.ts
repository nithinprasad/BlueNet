import { DocumentHistory } from "./DocumentHistory";

export class Document {


    public _id!: number;
    public _partId!: string;
    public _partName!: string;
    public _altPartId!: string;
    public _isShippableFG!: string;
    public _parentPartId!: string;
    public _partType!: string;
    public _supplySource!: string;
    public _hsnCode!: string;
    public _client!: string;
    public _partDoc!: string;
    public _createdAt!: string;
    public _updatedAt!: string;
    public _revisions!: DocumentHistory[];

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get partId(): string {
        return this._partId;
    }

    public set partId(partId: string) {
        this._partId = partId;
    }

    public get partName(): string {
        return this._partName;
    }

    public set partName(partName: string) {
        this._partName = partName;
    }

    public get altPartId(): string {
        return this._altPartId;
    }

    public set altPartId(altPartId: string) {
        this._altPartId = altPartId;
    }

    public get isShippableFG(): string {
        return this._isShippableFG;
    }

    public set isShippableFG(isShippableFG: string) {
        this._isShippableFG = isShippableFG;
    }

    public get parentPartId(): string {
        return this._parentPartId;
    }

    public set parentPartId(parentPartId: string) {
        this._parentPartId = parentPartId;
    }

    public get partType(): string {
        return this._partType;
    }

    public set partType(partType: string) {
        this._partType = partType;
    }

    public get supplySource(): string {
        return this._supplySource;
    }

    public set supplySource(supplySource: string) {
        this._supplySource = supplySource;
    }

    public get hsnCode(): string {
        return this._hsnCode;
    }

    public set hsnCode(hsnCode: string) {
        this._hsnCode = hsnCode;
    }

    public get client(): string {
        return this._client;
    }

    public set client(client: string) {
        this._client = client;
    }

    public get partDoc(): string {
        return this._partDoc;
    }

    public set partDoc(partDoc: string) {
        this._partDoc = partDoc;
    }

    public get createdAt(): string {
        return this._createdAt;
    }

    public set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    public get updatedAt(): string {
        return this._updatedAt;
    }

    public set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }

    public get revisions(): DocumentHistory[] {
        return this._revisions;
    }

    public set revisions(revisions: DocumentHistory[]) {
        this._revisions = revisions;
    }


}