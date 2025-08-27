import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle } from '@angular/common';

interface todo {
  text: string,
  completed: boolean
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgStyle],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo {
  newTodo: string = '';
  todos: todo[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({"text": this.newTodo, "completed": false});
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  clearAll() {
    this.todos = [];
  }

  changeCompleted(checked: todo) {
    checked.completed = !checked.completed;
  }
}
