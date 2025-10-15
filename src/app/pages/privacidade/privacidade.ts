import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-privacidade',
  imports: [Header, Footer],
  templateUrl: './privacidade.html',
  styleUrl: './privacidade.scss',
})
export class Privacidade {}
