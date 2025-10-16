import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/header/header';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss'],
})
export class ForgotPassword {
  // Por enquanto vazio - só o design
}
