import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Sidebar } from './components/shared/sidebar/sidebar';
import { Rightbar } from './components/shared/rightbar/rightbar';
import { Navbar } from './components/shared/navbar/navbar';
import { AuthService } from './services/auth.service'; // <== ekledik

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Rightbar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'frontend';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      this.authService.setAuthStatus(true);
    }
  }
}
