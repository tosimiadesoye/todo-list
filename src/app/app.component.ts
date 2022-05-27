import { Component, OnInit } from '@angular/core';
 import {Todo} from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

   newTodo: string;
   todos: Todo[] = [];

  ngOnInit(){
  }

  addTask(){
  
       let todo = new Todo()
       todo.description = this.newTodo 
       this.todos.push(todo)
       this.newTodo = ''
   }

   deleteTask(index: number){
      this.todos.splice(index, 1)
   }

   edit(editText: string){
    this.newTodo = editText
   }

  crossOver(){
    this.newTodo = 'btn-cancel'
  }
  


}
