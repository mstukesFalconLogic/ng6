import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../model/Comment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor(private data: DataService) { }

  ngOnInit() {
    
  }
}