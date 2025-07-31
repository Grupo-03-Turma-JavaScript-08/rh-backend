import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Funcionario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cargo: string;

    @Column()
    dataAdmissao: Date;
}