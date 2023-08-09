import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { CookingEntity } from './cooking.entity';
import { CreateCookingDto } from './create-cooking.dto';

@Controller('cooking')
export class CookingController {
  constructor(
    @InjectRepository(CookingEntity)
    private readonly repository: Repository<CookingEntity>,
  ) {}
  @Post('create')
  async create(@Body() body: CreateCookingDto) {
    return await this.repository.save({
      ...body,
    });
  }

  @Get('getList')
  async getAll() {
    return await this.repository.find({
      select: [
        'uuid',
        'name_en',
        'name_zh',
        'icon_name',
        'price',
        'yield',
        'mark',
        'scene_picture',
        'complex_info',
      ],
    });
  }

  @Get('getDetail/:uuid')
  async getDetail(@Param('uuid') uuid) {
    return await this.repository.find({
      select: [
        'uuid',
        'name_en',
        'name_zh',
        'icon_name',
        'describe',
        'complex_info',
        'mark',
        'mark_max',
        'price',
        'price_max',
        'unlock_fire',
        'scene_picture',
      ],
      where: [
        {
          uuid,
        },
      ],
    });
  }
}
