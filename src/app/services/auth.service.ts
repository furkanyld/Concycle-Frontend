import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface AuthResponse {
  token: string;
  userId: number;
  email: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private platformId = inject(PLATFORM_ID);

  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }

  getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('auth_token') : null;
  }

  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('auth_token', token);
      this.setAuthStatus(true);
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('auth_token');
      this.setAuthStatus(false);
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private hasToken(): boolean {
    return isPlatformBrowser(this.platformId) && !!localStorage.getItem('auth_token');
  }

  setAuthStatus(status: boolean) {
    this.authStatusSubject.next(status);
  }

  initialize(): void {
    const token = this.getToken();
    if (token) {
      this.setAuthStatus(true);
    }
  }
}
