import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-homescreen',
  imports: [Header, Footer, MatButtonModule, CurrencyPipe],
  templateUrl: './homescreen.html',
  styleUrls: ['./homescreen.scss'],
})
export class Homescreen {}
