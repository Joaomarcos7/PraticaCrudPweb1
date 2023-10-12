import { Component } from '@angular/core';
import {Produto} from "./shared/model/produto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-20232';
  produtos: Produto[] = [];
  produtoTratamento: Produto;
  mensagemErro = '';
  ProdutosPesquisa: Array<Produto> = [];

  constructor() {
    this.produtoTratamento = new Produto(0,'', '');
  }

  cadastrar(): void {
    if (!this.ehIDCadastrado(this.produtoTratamento.id)) {
      this.produtos.push(this.produtoTratamento);
      this.produtoTratamento = new Produto(0,'', '');
      this.mensagemErro = '';
    } else {
      this.mensagemErro = ` ID : ${this.produtoTratamento.id} já cadastrado!`;
    }
  }

  remover(produtoARemover: Produto): void {
    const indxARemover = this.produtos.findIndex(produto =>
      produto.id === produtoARemover.id);

    if (indxARemover >= 0) {
      this.produtos.splice(indxARemover, 1);
    }

  }

  private ehIDCadastrado(id: number): boolean {
    const produtosRetornados = this.produtos.filter(produto => produto.id === id);
    return produtosRetornados.length > 0;
  }

  pesquisar(pedacoNome: string) {
    if (pedacoNome.length == 0) {
      this.ProdutosPesquisa = [];
    }
    this.produtos.forEach(produto => {
      if (produto.nome.startsWith(pedacoNome)) {
        this.ProdutosPesquisa.push(produto);
      }
    });
  }
}
