import { Component, OnInit } from '@angular/core';
import {FloatLabelType} from "@angular/material/form-field";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  priorityControl = new FormControl("normal");
  constructor() { }

  ngOnInit(): void {
  }



}
