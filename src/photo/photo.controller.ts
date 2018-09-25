import { Controller, Get, Body, Post, Put, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';

import { createConnection } from 'net';
import { Photo } from './entitys/photo.entity';

@Controller('photo')
export class PhotoController {
    
    constructor(private readonly photoService: PhotoService) { }

    @Post()
    async create(@Body() Photo) {
        this.photoService.create(Photo);
    }

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }
    
}
