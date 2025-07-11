import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService, PostCreateRequest } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.html',
  styleUrls: ['./post-form.css']
})
export class PostFormComponent {
  post: PostCreateRequest = {
    title: '',
    description: '',
    point: 0,
    location: '',
    type: 'HELP',
  };

  constructor(private postService: PostService, private router: Router) {}

  submit() {
    this.postService.createPost(this.post).subscribe({
      next: (res) => {
        console.log('Post oluşturuldu:', res);
        this.router.navigate(['/']); // isteğe göre anasayfaya döner
      },
      error: (err) => {
        console.error('Post oluşturulurken hata:', err);
      },
    });
  }
}
