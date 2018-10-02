export class CreatePhotoInput {
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export class Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export abstract class IMutation {
    abstract createPhoto(name?: string, description?: string, filename?: string, views?: number, isPublished?: boolean): Photo | Promise<Photo>;
}

export class Photo {
    id?: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export class Post {
    id: number;
    title?: string;
    votes?: number;
}

export abstract class IQuery {
    abstract author(id: number): Author | Promise<Author>;

    abstract photo(id: number): Photo | Promise<Photo>;

    abstract allPhotos(): Photo[] | Promise<Photo[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract photoCreated(): Photo | Promise<Photo>;
}
