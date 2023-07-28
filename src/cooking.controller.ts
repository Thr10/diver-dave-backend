import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CookingEntity } from './cooking.entity';
import { CreateCookingDto } from './create-cooking.dto';

@Controller('cooking')
export class CookingController {
  constructor(
    @InjectRepository(CookingEntity)
    private readonly repository: Repository<CookingEntity>,
  ) {}
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file, @Body() body: CreateCookingDto) {
    return await this.repository.save({
      ...body,
      icon_picture: file.filename,
    });
  }
}
