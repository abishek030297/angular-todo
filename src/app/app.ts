import { Component } from '@angular/core';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'todo-app';
}
