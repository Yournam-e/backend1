import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { DogsModule } from '../dogs/dogs.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from '../../configurations/index';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Category } from '../category/entities/category.entity';
import User from '../users/entities/user.entity';
import { Transaction } from '../transactions/entities/transactions.untity';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), 
  UsersModule, 
  DogsModule,
  AuthModule,
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService)=>({
      type: 'postgres',
      host: configService.get("DB_HOST"),
      port: configService.get("DB_PORT"),
      username: configService.get("DB_USERNAME"),
      password: configService.get("DB_PASSWORD"),
      database: configService.get("DB_NAME"),
      synchronize: true,
      entities: [Category, User, Transaction],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    inject: [ConfigService]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
