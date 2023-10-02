import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostRepo } from './post.repo';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
    PrismaModule,
  ],
  providers: [PostResolver, PostService, PostRepo],
  exports: [],
})
export class PostModule {}
