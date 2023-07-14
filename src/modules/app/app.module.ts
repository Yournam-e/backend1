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
import { CategoryModule } from '../category/category.module';
const redis = require("redis");


async function lol(){
  const client = await redis.createClient({url: "redis://default:f62bae635d7b4831bf0d6ff85ccadceb@firm-kit-43136.kv.vercel-storage.com:43136"});

  await client.connect()
  client.on("error", function(error) {
    console.error(error);
  });

  client.set('framework', 'AngularJS', function(err, reply) { console.log(reply); }); 


  
 
  client.get('key', function(err, reply) { console.log(reply); }); 
}


lol()

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), 
  UsersModule, 
  DogsModule,
  AuthModule,
  CategoryModule,
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
