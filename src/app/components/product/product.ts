import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // precisa do FormsModule para [(ngModel)]

@Component({
  selector: 'app-product',
  imports: [Header, Footer, CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class Product {
  qtd: number = 1;

  alterarQuantidade(delta: number) {
    const novaQuantidade = this.qtd + delta;
    if (novaQuantidade >= 1) {
      this.qtd = novaQuantidade;
    }
  }
}
