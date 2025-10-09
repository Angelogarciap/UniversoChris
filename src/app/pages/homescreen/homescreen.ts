import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product/product';

@Component({
  selector: 'app-homescreen',
  imports: [Header, Footer, MatButtonModule],
  templateUrl: './homescreen.html',
  styleUrls: ['./homescreen.scss'],
})
export class Homescreen {}
