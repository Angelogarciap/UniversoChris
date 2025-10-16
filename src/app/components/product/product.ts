import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [Header, Footer, CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class Product {}
