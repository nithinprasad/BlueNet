export class DiagramRevison {


    public get id(): number | undefined {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get description(): string | undefined {
        return this._description;
    }

    public set_description(_description: string): void {
        this._description = _description;
    }

    public get prepared(): string | undefined {
        return this._prepared;
    }

    public set_prepared(_prepared: string): void {
        this._prepared = _prepared;
    }

    public get date(): Date | undefined {
        return this._date;
    }

    public set_date(_date: Date): void {
        this._date = _date;
    }

    public get approvalDate(): Date | undefined {
        return this._approvalDate;
    }

    public set_approvalDate(_approvalDate: Date): void {
        this._approvalDate = _approvalDate;
    }

    public get approvalBy(): string | undefined {
        return this._approvalBy;
    }

    public set_approvalBy(_approvalBy: string): void {
        this._approvalBy = _approvalBy;
    }

    public get model(): any {
        return this._model;
    }

    public set_model(_model: any): void {
        this._model = _model;
    }

    constructor(
        private _id?: number,
        private _description?: string,
        private _prepared?: string,
        private _date?: Date,
        private _approvalDate?: Date,
        private _approvalBy?: string,
        private _model?: any
    ) {

    }
}