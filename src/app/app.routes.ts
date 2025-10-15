import { Routes, RouterModule } from '@angular/router';
import { Homescreen } from './pages/homescreen/homescreen';
import { Contato } from './pages/contato/contato';
import { Privacidade } from './pages/privacidade/privacidade';
import { Product } from './pages/product/product';
import { Login } from './pages/telas-login/login/login';
import { Register } from './pages/telas-login/register/register';
import { ForgotPassword } from './pages/telas-login/forgot-password/forgot-password';
import { Cart } from './pages/cart/cart';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Homescreen },
  { path: 'contato', component: Contato },
  { path: 'privacidade', component: Privacidade },
  { path: 'product', component: Product },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'cart', component: Cart },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
