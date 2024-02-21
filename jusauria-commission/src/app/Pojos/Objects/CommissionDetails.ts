import { Albums } from "../enums/Albums.enum";

export class CommissionDetails {
    type:string;
    description: string;
    prices: string[];
    artExampleAlbum: Albums;

    constructor(
        type:string,
        description: string,
        prices: string[],
        artAlbum:Albums
    ){
        this.type=type;
        this.description=description;
        this.prices=prices;
        this.artExampleAlbum=artAlbum;
    }
}
