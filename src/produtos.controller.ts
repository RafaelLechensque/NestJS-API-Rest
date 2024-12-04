import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obertTodos(): string {
        return 'Listar Todos'
    }

    @Get(':id')
    obeterUm(@Param() params): string {

        return `Retorna os dados do produto ${params.id}`
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto)
        return 'Produto criado'
    }

    @Put()
    alterar(@Body() produto): string{
        console.log(produto);
        return 'Protuto atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `Apaga o produto ${params.id}`
    }
}