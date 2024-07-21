import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { Suggestion, SuggestionSchema } from './schemas/suggestion.schema';
import {SuggestionsGateway} from "./suggestions.gateway";

@Module({
  imports: [MongooseModule.forFeature([{ name: Suggestion.name, schema: SuggestionSchema }])],
  controllers: [SuggestionsController],
  providers: [SuggestionsService, SuggestionsGateway],
})
export class SuggestionsModule {}
