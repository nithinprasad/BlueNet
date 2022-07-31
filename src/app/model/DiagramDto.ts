import { DiagramRevison } from "./DiagramRevison";

export class DiagramDTO {


    public get model(): DiagramRevison[] {
        return this._model;
    }
    public set model(value: DiagramRevison[]) {
        this._model = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    constructor(
        private _id: string,
        private _model: DiagramRevison[] = []
    ) {
    }

}