import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entitys/photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) { }

    async create(Photo) {
        await this.photoRepository.save(Photo)
            .then(post => console.log("Post has been saved: ", post))
            .catch(error => console.log("Cannot save. Error: ", error));
    }

    async findAll(): Promise<Photo[]> {
        var photos = await this.photoRepository.find();
        console.log(photos);
        return photos;
    }
}
