import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookingController } from './cooking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookingEntity } from './cooking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'diver-dave',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CookingEntity]),
  ],
  controllers: [AppController, CookingController],
  providers: [AppService],
})
export class AppModule {}
