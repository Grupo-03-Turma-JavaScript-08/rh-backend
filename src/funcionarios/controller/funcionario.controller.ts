import {Controller,Post, Get, Put, Delete,Body,Param,} from '@nestjs/common';
import { FuncionarioService } from '../service/funcionario.service';
import { Funcionario } from '../entitie/funcionario.entity';


@Controller('funcionarios')
export class FuncionarioController {
    constructor(private readonly service: FuncionarioService) {}

    @Post()
    create(@Body() funcionario: Funcionario) {
        return this.service.create(funcionario);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.service.findById(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() funcionario: Funcionario) {
        return this.service.update(Number(id), funcionario);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(Number(id));
    }

    @Get('/cargo/:cargo')
    findAllByCargo(@Param('cargo') cargo: string) {
        return this.service.findAllByCargo(cargo);
    }
}