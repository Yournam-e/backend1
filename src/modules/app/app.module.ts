import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/users/users.module';
import { DogsModule } from 'src/modules/dogs/dogs.module';
import { ConfigModule } from '@nestjs/config';
import configurations from 'src/configurations';

@Module({
  imports: [UsersModule, DogsModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
