import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Suggestion extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ default: 1 })
    votes: number;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);
