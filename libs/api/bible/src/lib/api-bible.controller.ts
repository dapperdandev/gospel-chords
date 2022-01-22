import { Controller, Get } from '@nestjs/common';

@Controller('bible')
export class ApiBibleController {

  @Get()
  getData() {
    return 'bible api works';
  }
}
