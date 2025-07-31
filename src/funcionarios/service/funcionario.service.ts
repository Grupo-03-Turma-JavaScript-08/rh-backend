import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Funcionario } from '../entitie/funcionario.entity';

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(Funcionario)
        private funcionarioRepository: Repository<Funcionario>,
    ) {}

    create(funcionario: Funcionario) {
        const novoFuncionario = this.funcionarioRepository.create(funcionario);
        return this.funcionarioRepository.save(novoFuncionario);
    }

    findAll() {
        return this.funcionarioRepository.find();
    }

    findById(id: number) {
        return this.funcionarioRepository.findOneBy({ id });
    }

    update(id: number, funcionario: Funcionario) {
        return this.funcionarioRepository.update(id, funcionario);
    }

    delete(id: number) {
        return this.funcionarioRepository.delete(id);
    }

    findAllByCargo(cargo: string) {
        return this.funcionarioRepository.find({
            where: { cargo: ILike(`%${cargo}%`) },
        });
    }
}