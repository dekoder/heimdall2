import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import {JwtAuthGuard} from '../guards/jwt-auth.guard';
import {CreateEvaluationTagDto} from './dto/create-evaluation-tag.dto';
import {EvaluationTagDto} from './dto/evaluation-tag.dto';
import {UpdateEvaluationTagDto} from './dto/update-evaluation-tag.dto';
import {EvaluationTagsService} from './evaluation-tags.service';

@Controller('evaluation-tags')
@UseGuards(JwtAuthGuard)
export class EvaluationTagsController {
  constructor(private evaluationTagsService: EvaluationTagsService) {}
  @Get()
  async index(): Promise<EvaluationTagDto[]> {
    return this.evaluationTagsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<EvaluationTagDto> {
    return this.evaluationTagsService.findById(id);
  }

  @Post()
  async create(
    @Param('evaluationId') evaluationId: number,
    @Body() createEvaluationTagDto: CreateEvaluationTagDto
  ): Promise<EvaluationTagDto> {
    return this.evaluationTagsService.create(
      evaluationId,
      createEvaluationTagDto
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEvaluationTagDto: UpdateEvaluationTagDto
  ): Promise<EvaluationTagDto> {
    return this.evaluationTagsService.update(id, updateEvaluationTagDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<EvaluationTagDto> {
    return this.evaluationTagsService.remove(id);
  }
}
