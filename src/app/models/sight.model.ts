import { Image } from "./image.model";

export class Sight {
    id?: any;
    name?: string;
    description?: string;
    active?: boolean;
    relevance?: string;
    langitude?: string;
    longitude?: string;
    images?: Image[];
}
