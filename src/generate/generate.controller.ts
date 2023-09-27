import { Controller, Get, Query } from '@nestjs/common';
import { GenerateService } from './generate.service';

@Controller('generate')
export class GenerateController {
  constructor(private generateService: GenerateService) {}

  @Get()
  gptRes(@Query('word') word: string) {
    return this.generateService.gptRes(word);
  }
}
