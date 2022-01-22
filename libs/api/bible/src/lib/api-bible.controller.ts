import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';
// import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { ApiBibleService } from './api-bible.service';

@Controller('bible')
export class ApiBibleController {
  constructor(private apiBibleService: ApiBibleService) {}

  @Get()
  // @ApiOkResponse({type: Example})
  getData() {
    return this.apiBibleService.getBibles().pipe(
      map(({data}) => data)
    )
  }
}
