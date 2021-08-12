export class PlayCard {
    id: string;
    value: number;
    pictureUrl: string;
    altUrl: string;
    isShown: boolean;

    constructor(
        id: string,
        value: number,
        url: string,
        altUrl: string
    ){
        this.id = id;
        this.value = value;
        this.pictureUrl = url;
        this.altUrl = altUrl;
        this.isShown = false;
    }
}
