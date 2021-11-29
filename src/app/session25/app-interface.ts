export class album {

    id ?: number;
    name ?: string;
    albumArt ?: string;
    year ?: number;
    songs?: song[];
    
}

export class song {

    trackNumber?: number;
    name?:string;
    duration?: string;

}
