import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicsModule } from './comics/comics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/komik-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ComicsModule,
  ],
})
export class AppModule {}
