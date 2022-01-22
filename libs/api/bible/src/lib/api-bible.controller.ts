import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('bible')
export class ApiBibleController {
  constructor(private configService: ConfigService) {}

  @Get()
  getData() {
    return this.configService.get<string>('API_BIBLE_API_KEY');
  }
}
