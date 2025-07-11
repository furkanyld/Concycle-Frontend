import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

export interface PostCreateRequest {
  title: string;
  description: string;
  point: number;
  location: string;
  type: 'HELP' | 'TALENT';
}

export interface PostResponse {
  id: number;
  title: string;
  description: string;
  point: number;
  location: string;
  type: 'HELP' | 'TALENT';
  ownerName: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  createPost(data: PostCreateRequest): Observable<PostResponse> {
    return this.http.post<PostResponse>(`${this.apiUrl}/create`, data);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
