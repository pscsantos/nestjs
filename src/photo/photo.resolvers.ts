import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Photo } from './photo.entity';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/createPhoto.dto';
//import { Photo } from 'graphql.schema'

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
    async create(@Args('createPhotoInput') args: CreatePhotoDto): Promise<Photo> {
        console.log(args);
        const photo = args as Photo;
        const createdPhoto = await this.photosService.create( photo );
        console.log(createdPhoto);
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

