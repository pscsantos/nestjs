import { Controller, Get, Req, Post, Param, Header, Body,Query, Put, Delete, HttpStatus, HttpException, Res } from '@nestjs/common';
import { Observable, of, identity } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    //Construtor serviços cat
    constructor(private readonly catsService: CatsService){}
    
    @Post()
    async create(@Body() createCatDto){        
        this.catsService.create(createCatDto);
    }
    
    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
}
