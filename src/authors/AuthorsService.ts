import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorService {
    private readonly authors: Author[] = [];

    create(author: Author){
        this.authors.push(author);          
    }

    findAll(): Cat[]{
        return this.cats;
    }
}