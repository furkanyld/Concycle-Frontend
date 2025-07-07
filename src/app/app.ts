import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Sidebar } from './components/shared/sidebar/sidebar';
import { Rightbar } from './components/shared/rightbar/rightbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Rightbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
