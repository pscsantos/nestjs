import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Photo } from '../graphql.schema';
import { PhotosGuard  } from './photos.guard';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/createPhoto.dto';

const pubSub = new PubSub();

@Resolver('Photo')
export class PhotosResolvers {
    constructor( private readonly photosService: PhotosService ){}

    @Query('allPhotos')
   // @UseGuards(PhotosGuard)
    async allPhotos(){
        return await this.photosService.findAll();
    }
    @Mutation('createPhoto')
    async create(@Args('CreatePhotoInput') args: CreatePhotoDto): Promise<Photo> {
        const createdPhoto = await this.photosService.create(args);
        //pubSub.publish('photoCreated', { photoCreated: createdPhoto });
        return createdPhoto;
    }
    /*
    @Subscription('')
    catCreated() {
        return {
        subscribe: () => pubSub.asyncIterator(''),
        };
    }
    */
}

