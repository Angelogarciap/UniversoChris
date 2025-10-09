import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-product',
  imports: [Header, Footer],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  produtos = [
    {
      nome: 'Chaveiro de Pelúcia Gatinho',
      preco: 49.9,
      imagem: 'assets/chaveiro-gatinho.jpg',
      estoque: 1,
    },
    { nome: 'Cola Stitch – Disney', preco: 18.3, imagem: 'assets/cola-stitch.jpg', estoque: 12 },
    { nome: 'Borracha Batom Kaz', preco: 6.0, imagem: 'assets/borracha-batom.jpg', estoque: 8 },
    {
      nome: 'Chaveiro de Pelúcia Ursinho',
      preco: 49.9,
      imagem: 'assets/chaveiro-ursinho.jpg',
      estoque: 3,
    },
    {
      nome: 'Borracha Hello Kitty - Leo&Leo',
      preco: 5.0,
      imagem: 'assets/borracha-hello-kitty.jpg',
      estoque: 15,
    },
  ];
}
