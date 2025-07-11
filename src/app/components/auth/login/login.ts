import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginRequest, AuthResponse } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  form: LoginRequest = { email: '', password: '' };
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.error = '';
    this.success = '';

    this.authService.login(this.form).subscribe({
      next: (res: AuthResponse) => {
        this.authService.saveToken(res.token);

        this.success = 'Giriş başarılı. Yönlendiriliyorsunuz...';

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000); // 1 saniye bekleyip yönlendir
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Giriş başarısız. Lütfen tekrar deneyin.';
      },
    });
  }
}
