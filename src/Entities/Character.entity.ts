import {LocationEntity} from './Location.entity';

export class CharacterEntity {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationEntity;
    location: LocationEntity;
    image: string;
    episode: Array<string>;
    url: string;
    created: Date;

    constructor(object: any) {
        this.id = object.id;
        this.name = object.name;
        this.status = object.status;
        this.species = object.species;
        this.type = object.type;
        this.gender = object.gender;
        this.origin = new LocationEntity(object.origin);
        this.location = new LocationEntity(object.location);
        this.image = object.image;
        this.episode = object.episode;
        this.url = object.url;
        this.created = new Date(object.created);
    }
}
