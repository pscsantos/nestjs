import { Controller, Get, Body, Post, } from '@nestjs/common';
import { PhotoService } from './photo.service'
import { Photo } from './photo.entity'
import { createConnection } from 'net';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }
    /*
        @Post()
        async create(@Body() Photo) {
            this.photoService.create(Photo);
        }
    */
    @Get()
    findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }
}
