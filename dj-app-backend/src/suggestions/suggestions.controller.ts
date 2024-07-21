import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';

@Controller('suggestions')
export class SuggestionsController {
    constructor(private readonly suggestionsService: SuggestionsService) {}

    @Post()
    create(@Body('title') title: string) {
        return this.suggestionsService.create(title);
    }

    @Get()
    findAll() {
        return this.suggestionsService.findAll();
    }
}
