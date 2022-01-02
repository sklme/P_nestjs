import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto, ListAllEntities, UpdateDogDto } from './dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
    return 'This action adds a new dog';
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
    // return `This action returns all dogs (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} dog`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dog`;
  }
}
