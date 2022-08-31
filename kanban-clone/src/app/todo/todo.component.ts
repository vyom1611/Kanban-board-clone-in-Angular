import { Component, OnInit } from '@angular/core';
import {FloatLabelType} from "@angular/material/form-field";
import {FormControl, FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Task, Tag} from "../model/task";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  addOnBlur = true;
  color: any;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  // Angular Form
  todoForm !: FormGroup;


  tasks: {
    name: string,
    arr: Task[]
  } = {
    name: "Tasks",
    arr:[]
  };
  research: {
    name: string,
    arr: Task[]
  } = {
    name: "Research",
    arr:[]
  };
  in_progress: {
    name: string,
    arr: Task[]
  } = {
    name: "In-progress",
    arr:[]
  };
  review: {
    name: string,
    arr: Task[]
  } = {
    name: "Review",
    arr:[]
  };
  completed_tasks: {
    name: string,
    arr: Task[]
  } = {
    name: "Completed",
    arr:[]
  };

  boards: any[];

  closed: boolean;

  constructor(private fb: FormBuilder) {
    this.boards = [this.tasks, this.research, this.in_progress, this.review, this.completed_tasks];
    this.closed = true;
    this.todoForm = this.fb.group({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      priority: new FormControl('normal',Validators.required),
      tags: new FormControl(this.tags),
      color: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {

  }

  addTask() {
    this.tasks.arr.push({
    name: this.todoForm.value.name,
      description: this.todoForm.value.description,
      priority: this.todoForm.value.priority,
      color: this.todoForm.value.color,
      tags: this.todoForm.value.tags,
    })

  }



}
