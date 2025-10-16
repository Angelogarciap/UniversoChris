import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/header/header';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  // Por enquanto vazio - só o design
}
