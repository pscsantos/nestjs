import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) { }
    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }
    async create(photo: Photo ): Promise<Photo> {        
        return await this.photoRepository.save(photo);
        /*
            .then(post => console.log("Post has been saved: ", post))
            .catch(error => console.log("Cannot save. Error: ", error));
        */               
    }
}
