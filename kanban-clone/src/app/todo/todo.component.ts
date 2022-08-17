import { Component, OnInit } from '@angular/core';
import {FloatLabelType} from "@angular/material/form-field";
import {FormControl, FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Task} from "../model/task";

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  priorityControl = new FormControl("normal");
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  addOnBlur = true;
  favColor: any;

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



  tasks: Task[] = [];
  research: Task[] = [];
  in_progress: Task[] = [];
  review: Task[] = [];
  completed_tasks: Task[] = [];

  boards: any[];

  constructor(private fb: FormBuilder) {
    this.boards = [this.tasks, this.research, this.in_progress, this.review, this.completed_tasks];
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })

  }



}
