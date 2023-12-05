import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';

@Module({
  providers: [ComicsService]
})
export class ComicsModule {}
