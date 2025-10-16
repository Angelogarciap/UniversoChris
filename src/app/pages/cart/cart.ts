import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-cart',
  imports: [Header, Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {}

export class CheckoutComponent {
  // Método para lidar com o envio do formulário
  onSubmit(event: Event): void {
    event.preventDefault();

    // Obtendo os valores dos campos
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const cidade = (document.getElementById('cidade') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    // Atualizando a mensagem
    const msg = document.getElementById('mensagem') as HTMLElement;
    msg.textContent = `✅ Pedido confirmado! ${nome}, você receberá um e-mail em ${email} com os detalhes da retirada em ${cidade}.`;

    // Resetando o formulário
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
