import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './funcionarios/entitie/funcionario.entity';
import { FuncionarioModule } from './funcionarios/funcionario.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Miguel1990@',
            database: 'db_rhbackend',
            entities: [Funcionario],
            synchronize: true,
        }),
        FuncionarioModule,
    ],
})
export class AppModule {}

