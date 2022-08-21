export class Data {

    private _id!: number;
    private _data: any;
    private _createdAt!: string;
    private _updatedAt!: string;

    public get id(): number {
        return this.id;
    }

    public set id(id: number) {
        this.id = id;
    }

    public get data(): any {
        return this.data;
    }

    public set data(data: any) {
        this.data = data;
    }

    public get createdAt(): string {
        return this.createdAt;
    }

    public set createdAt(createdAt: string) {
        this.createdAt = createdAt;
    }

    public get updatedAt(): string {
        return this.updatedAt;
    }

    public set updatedAt(updatedAt: string) {
        this.updatedAt = updatedAt;
    }


}