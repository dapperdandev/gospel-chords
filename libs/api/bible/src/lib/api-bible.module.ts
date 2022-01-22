import { Module } from '@nestjs/common';
import { ApiBibleController } from './api-bible.controller';

@Module({
  controllers: [
    ApiBibleController
  ],
  providers: []
})
export class ApiBibleModule {}
