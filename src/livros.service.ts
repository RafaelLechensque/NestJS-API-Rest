import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    private readonly livro: Livro[] =
        [];

    obterTodos(): Livro[] {
        return this.livro;
    }

    obterUm(id: number): Livro {
        return this.livro[0];
    }

    criar(livro: Livro) {
        this.livro.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar(id: number) {
        this.livro.pop();
    }
}