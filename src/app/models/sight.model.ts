import { Image } from "./image.model";

export class Sight {
    id?: any;
    name?: string;
    desciption?: string;
    active?: boolean;
    relevance?: string;
    langitude?: string;
    longitude?: string;
    images?: Image[];
}
