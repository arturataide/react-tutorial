export class Info {
    count: number;
    pages: number;
    next?: string;
    prev?: string;

    constructor(object: any) {
        this.count = object.count;
        this.pages = object.pages;
        this.next = object.next ? object.next : null;
        this.prev = object.prev ? object.prev : null;
    }
}
