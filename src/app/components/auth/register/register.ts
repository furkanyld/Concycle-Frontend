import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, RegisterRequest, AuthResponse } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  form: RegisterRequest = { name: '', surname: '', email: '', password: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.form).subscribe({
      next: (res: AuthResponse) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
      },
    });
  }
}
