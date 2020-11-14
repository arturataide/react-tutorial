export class EpisodeEntity {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: Array<string>;
    url: string;
    created: Date;

    constructor(object: any) {
        this.id = object.id;
        this.name = object.name;
        this.airDate = object.air_date;
        this.episode = object.episode;
        this.characters = object.characters;
        this.url = object.url;
        this.created = new Date(object.created);

    }

}
