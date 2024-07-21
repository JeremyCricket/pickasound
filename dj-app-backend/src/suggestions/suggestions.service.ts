import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Suggestion } from './schemas/suggestion.schema';
import {SuggestionsGateway} from "./suggestions.gateway";

@Injectable()
export class SuggestionsService {
    constructor(@InjectModel(Suggestion.name)
                private suggestionModel: Model<Suggestion>,
                private suggestionsGateway: SuggestionsGateway,) {}
git
    async create(title: string): Promise<Suggestion> {
        const existingSuggestion = await this.suggestionModel.findOne({ title }).exec();
        if (existingSuggestion) {
            existingSuggestion.votes += 1;
            return existingSuggestion.save();
        }
        const newSuggestion = new this.suggestionModel({ title });
        this.suggestionsGateway.sendUpdates();
        return newSuggestion.save();
    }

    async findAll(): Promise<Suggestion[]> {
        return this.suggestionModel.find().sort({ votes: -1 }).exec();
    }
}
