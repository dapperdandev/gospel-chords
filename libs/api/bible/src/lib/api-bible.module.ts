import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiBibleController } from './api-bible.controller';

@Module({
  imports: [
    ConfigModule
  ],
  controllers: [
    ApiBibleController
  ],
  providers: []
})
export class ApiBibleModule {}
