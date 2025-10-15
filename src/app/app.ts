import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homescreen } from './pages/homescreen/homescreen';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cart } from './pages/cart/cart';
import { Contato } from './pages/contato/contato';
import { Privacidade } from './pages/privacidade/privacidade';
import { Login } from './pages/telas-login/login/login';
import { Register } from './pages/telas-login/register/register';
import { Product } from './pages/product/product';
import { ForgotPassword } from './pages/telas-login/forgot-password/forgot-password';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Homescreen,
    Header,
    Footer,
    Contato,
    Cart,
    Privacidade,
    Login,
    Register,
    Product,
    ForgotPassword,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('universo-chris');
}
