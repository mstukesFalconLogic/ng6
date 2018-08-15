import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Post } from '../model/Post';
import { User } from '../model/User';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailsComponent implements OnInit {

  post$: Post;
  user$: User;
  comments$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.post$ = params.id);
  }

  ngOnInit() {
    const self = this;

    self.data.getPost(self.post$).subscribe({
      next(data) { 
        self.post$ = data;
        self.data.getUser(self.post$.id).subscribe(data => self.user$ = data);
        self.data.getPostComments(self.post$.id).subscribe(data => self.comments$ = data);
      }
    });
  }
}