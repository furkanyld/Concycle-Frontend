import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostCard } from '../shared/post-card/post-card';
import { PostService } from '../../services/post.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).urlAfterRedirects === '/') {
          this.getPosts();
        }
      });
  }

  getPosts(): void {
    this.postService.getAllPosts().subscribe({
      next: (data: any[]) => {
        this.posts = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          point: item.point,
          location: item.location,
          type: item.type,
          ownerName: item.ownerName,
          createdAt: item.createdAt
        }));
        console.log('Postlar dönüştürüldü:', this.posts);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Postları alırken hata:', err);
      }
    });
  }
}
