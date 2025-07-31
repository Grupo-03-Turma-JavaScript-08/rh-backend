import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entitie/funcionario.entity';
import { FuncionarioService } from './service/funcionario.service';
import { FuncionarioController } from './controller/funcionario.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Funcionario])],
    controllers: [FuncionarioController],
    providers: [FuncionarioService],
})
export class FuncionarioModule {}