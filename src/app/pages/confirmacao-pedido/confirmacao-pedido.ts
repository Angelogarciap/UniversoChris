import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-confirmacao-pedido',
  imports: [Header, Footer],
  templateUrl: './confirmacao-pedido.html',
  styleUrl: './confirmacao-pedido.scss',
})
export class ConfirmacaoPedido {}
