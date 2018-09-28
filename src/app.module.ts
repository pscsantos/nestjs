import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { join } from 'path';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), 
            PhotoModule,
            GraphQLModule.forRoot({
              typePaths: ['./**/*.graphql'],
              installSubscriptionHandlers: true,
              definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class',
              },
            }),
          ],
})
export class ApplicationModule {
  constructor ( private readonly connection: Connection){}
}