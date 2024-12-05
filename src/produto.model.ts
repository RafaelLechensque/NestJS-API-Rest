export class Produto {
  id: number;
  codigo: string;
  nome: string;
  preco: number;

  constructor(codigo, nome, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
