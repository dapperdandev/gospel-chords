import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiBibleController } from './api-bible.controller';
import { ApiBibleService } from './api-bible.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.register({
      baseURL: 'https://api.scripture.api.bible/v1/'
    })
  ],
  controllers: [
    ApiBibleController
  ],
  providers: [
    ApiBibleService
  ]
})
export class ApiBibleModule {}
