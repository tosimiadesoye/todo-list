import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/task.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];
  // todos: Todo[] = [];
   newTodo: string;


  ngOnInit(): void{
    this.todos=[{
      description:"first todo",
      completed: false,
    },{
      description: "second todo",
      completed: true

    }
  ]
  }

  addTask(){ 
       let todo = new Todo()
       todo.description = this.newTodo 
       this.todos.push(todo)
       this.newTodo = ''
   }

   deleteTask(index: number){
      this.todos = this.todos.filter((v, i) => i!== index)
   }
// void means a function returns nothing, we can also say a functions returns a number or a string
toggleDone(id:number){
  this.todos.map((v, index)=>{
    if(index == id) v.completed = !v.completed;
    return v
  })
 }
   edit(editText: string){
     console.log(editText)
    this.newTodo = editText
   }

  
  


}
