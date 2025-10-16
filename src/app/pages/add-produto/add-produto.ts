import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-add-produto',
  imports: [Header, Footer],
  templateUrl: './add-produto.html',
  styleUrl: './add-produto.scss'
})
export class AddProduto {

}
