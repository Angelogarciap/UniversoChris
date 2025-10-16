import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-product',
  imports: [Header, Footer],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  quantity = 1;

  product = {
    title: 'Chaveiro de Pelúcia Gatinho Sanrio – Kuromi – 12 cm',
    price: 49.9,
    imageUrl:
      'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/17-9bed0e03340f8043e617578967007693-1024-1024.webp', // coloque a imagem correta na pasta assets
    descriptionTitle: '🐾 Chaveiro de Pelúcia Gatinho Sanrio – Kuromi – 12 cm',
    description: 'Transforme sua mochila, bolsa ou até suas chaves em algo muito mais fofo...',
    finalText: 'Fofo, divertido e cheio de estilo: um mimo que vai conquistar seu coração! 💕',
    breadcrumbs: [
      'Início',
      'Sanrio',
      'Kuromi',
      'Chaveiro de Pelúcia Gatinho Sanrio – Kuromi – 12 cm',
    ],
    features: [
      'Design exclusivo inspirado no personagem Kuromi 🐾',
      'Pelúcia super macia e agradável ao toque',
      'Tamanho aproximado de 12 cm, perfeito para carregar no dia a dia',
      'Chaveiro metálico resistente, fácil de prender em bolsas, estojos ou chaves',
      'Item colecionável, indispensável para quem ama papelaria e acessórios criativos',
    ],
  };

  incrementQty() {
    this.quantity++;
  }

  decrementQty() {
    if (this.quantity > 1) this.quantity--;
  }
}
