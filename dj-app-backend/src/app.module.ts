import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuggestionsModule } from './suggestions/suggestions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dj_app'),
    SuggestionsModule,
  ],
})
export class AppModule {}
