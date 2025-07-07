import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostCard } from '../shared/post-card/post-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  posts: Post[] = [
    {
      id: '1',
      title: 'Fizik Dersi',
      description: 'Lise öğrencileri için özel ders',
      location: 'İstanbul',
      type: 'Yetenek',
      point: 50,
      owner: {
        id: 1,
        name: 'Ahmet',
        surname: 'Yılmaz',
        email: 'ahmet@mail.com',
        point: 200
      },
      createdAt: '2025-07-05T15:00:00'
    },
    {
      id: '2',
      title: 'Alışveriş Yardımı',
      description: 'Market alışverişi için yardım gerekiyor.',
      location: 'Ankara',
      type: 'Yardım',
      point: 30,
      owner: {
        id: 2,
        name: 'Zeynep',
        surname: 'Yılmaz',
        email: 'zeynep@mail.com',
        point: 120
      },
      createdAt: '2025-07-05T14:30:00'
    }
  ];
}
