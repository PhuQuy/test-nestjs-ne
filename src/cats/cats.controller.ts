import { Controller, Get, Req, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
}
