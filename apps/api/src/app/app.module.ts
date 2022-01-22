import { Module } from '@nestjs/common';
import { ApiBibleModule } from '@gospel-chords/api/bible';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './@core/core.module';

@Module({
  imports: [
    CoreModule,
    ApiBibleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
