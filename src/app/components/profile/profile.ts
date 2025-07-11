import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, UserProfileResponse } from '../../services/user.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfileResponse | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUser();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).urlAfterRedirects === '/profile') {
          this.loadUser();
        }
      });
  }

  loadUser() {
    this.userService.getMyProfile().subscribe({
      next: (res) => {
        this.user = res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Profil alınamadı', err)
    });
  }
}
