import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, DeleteResult } from 'typeorm';
import { Funcionario } from '../entitie/funcionario.entity';

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(Funcionario)
        private funcionarioRepository: Repository<Funcionario>,
    ) { }

    async create(funcionario: Funcionario) {
        const novoFuncionario = this.funcionarioRepository.create(funcionario);
        return await this.funcionarioRepository.save(novoFuncionario);
    }

    async findAll() {
        return await this.funcionarioRepository.find();
    }

    async findById(id: number): Promise<Funcionario> {
        const funcionario = await this.funcionarioRepository.findOne({
            where: {
                id
            },

        });

        if (!funcionario)
            throw new HttpException('Funcionario não encontrado', HttpStatus.NOT_FOUND);

        return funcionario;

    }

   async update(id: number, funcionario: Funcionario) {
    const funcionarioExistente = await this.findById(id);
    if (!funcionarioExistente) {
        throw new Error('Funcionário não encontrado');
    }

    const atualizado = { ...funcionarioExistente, ...funcionario };
    return this.funcionarioRepository.save(atualizado);
}


    async delete(id: number) {
       const resultado = await this.funcionarioRepository.delete(id);
       if(resultado.affected === 0){
        throw new NotFoundException('Funcionario nao encontrado');
       }
       return {message: 'Funcionario deletado com sucesso'}
  
    }

    async findAllByCargo(cargo: string): Promise<Funcionario[]> {
        return await this.funcionarioRepository.find({
            where: { cargo: ILike(`%${cargo}%`) },
        });
    }
}
