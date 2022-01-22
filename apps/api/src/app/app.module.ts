import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiBibleModule } from '@gospel-chords/api/bible';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApiBibleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
