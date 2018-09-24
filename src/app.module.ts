import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),
            GraphQLModule.forRootAsync({
              useFactory: () => ({
                typePaths: ['./**/*.graphql'],
              }),
            }),  
            PhotoModule],
})
export class ApplicationModule {
  constructor ( private readonly connection: Connection){}
}