import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  todo$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.todo$ = params.id);
  }

  ngOnInit() {
    this.data.getTodo(this.todo$).subscribe(data=> this.todo$ = data);
  }
}