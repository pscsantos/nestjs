import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from 'middlewares/logger.middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [CatsModule,
            GraphQLModule.forRootAsync({
              useFactory: () => ({
                typePaths: ['./**/*.graphql'],
              }),
            }),  
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer ){
    consumer
      .apply(LoggerMiddleware)
      .with('AppModule')
      .exclude(
        {path: 'cats', method: RequestMethod.GET },
        {path: 'cats', method: RequestMethod.POST}
      )
      .forRoutes(CatsController);

  }
}

