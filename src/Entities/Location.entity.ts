export class LocationEntity {
    id: number;
    name: string
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: Date;

    constructor(object: any) {
        this.id = object.id;
        this.name = object.name;
        this.type = object.type;
        this.dimension = object.dimension;
        this.residents = object.residents;
        this.url = object.url;
        this.created = new Date(object.created);
    }
}
