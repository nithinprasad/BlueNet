import { Data } from "./Data"
export class DocumentHistory {

    private _id!: number;
    private _docId!: number;
    private _revisionid!: string;
    private _description!: string;
    private _preparedBy!: string;
    private _approvedBy!: string;
    private _approvedDate!: string;
    private _data!: number;
    private _createdAt!: string;
    private _updatedAt!: string;
    private _diagram!: Data[];

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get docId(): number {
        return this._docId;
    }

    public set docId(docId: number) {
        this._docId = docId;
    }

    public get revisionid(): string {
        return this._revisionid;
    }

    public set revisionid(revisionid: string) {
        this._revisionid = revisionid;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get preparedBy(): string {
        return this._preparedBy;
    }

    public set preparedBy(preparedBy: string) {
        this._preparedBy = preparedBy;
    }

    public get approvedBy(): string {
        return this._approvedBy;
    }

    public set approvedBy(approvedBy: string) {
        this._approvedBy = approvedBy;
    }

    public get approvedDate(): string {
        return this._approvedDate;
    }

    public set approvedDate(approvedDate: string) {
        this._approvedDate = approvedDate;
    }

    public get data(): number {
        return this._data;
    }

    public set data(data: number) {
        this._data = data;
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

    public get diagram(): Data[] {
        return this._diagram;
    }

    public set diagram(diagram: Data[]) {
        this._diagram = diagram;
    }

}

