import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './modules/prompt/prompt.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PromptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
