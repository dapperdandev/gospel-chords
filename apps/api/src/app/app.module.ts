import { Module } from '@nestjs/common';
import { ApiBibleModule } from '@gospel-chords/api/bible';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiBibleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
