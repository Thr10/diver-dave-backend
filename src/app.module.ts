import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppService } from './app.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { CookingController } from './cooking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookingEntity } from './cooking.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/assets',
    }),
    MulterModule.register({
      storage: diskStorage({
        destination: join('./public'),
        filename: (_, file, callback) => {
          const fileName = `${
            new Date().getTime() + extname(file.originalname)
          }`;
          return callback(null, fileName);
        },
      }),
    }),
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
