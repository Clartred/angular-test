export class PlayCard {
    value: number;
    pictureUrl: string;

    constructor(
        value: number,
        url: string
    ){
        this.value = value;
        this.pictureUrl = url;
    }
}
