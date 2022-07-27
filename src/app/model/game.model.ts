import { Company } from "./company.model";
import { Estudio } from "./estudio.model";
import { Items } from "./items.enum";
import { Photo } from "./photo.model";
import { Items1 } from "./platforms.enum";
import { Video } from "./video.model";

export interface Game{
    _id: number,
    title: string,
    description: string,
    photos: Photo[],
    videos: Video[],
    mediumPrice: number,
    studio: Estudio,
    company: Company,
    releaseYear: number,
    genres: Items[],
    platforms: Items1[],
    tags: string[],
    rating: number,
    updatedAt: string,
    totalVotes: number,
    createdAt: string,
}