import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livro } from './livro.model';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql', // dialeto do banco de dados
      host: 'localhost', // endereço do servidor do banco de dados
      port: 3306, // porta do banco de dados. A porta padrão é 3306, mas estou usando 3307 por conflitos na minha máquina
      username: process.env.USUARIO_BANCO_DE_DADOS,
      password: process.env.SENHA_BANCO_DE_DADOS, // senha do usuário do MySQL
      database: 'livraria', // nome do banco de dados
      autoLoadModels: true,
      synchronize: true, // por enquanto vamos deixar em branco
    }),
    SequelizeModule.forFeature([Livro]),],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule { }
