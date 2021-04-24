import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import mongodbConfig from './config/mongodb.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(mongodbConfig()),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
