import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/header/header';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  // Por enquanto vazio - só o design
}
