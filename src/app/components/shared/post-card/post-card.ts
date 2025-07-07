import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  @Input() post!: Post;
}
