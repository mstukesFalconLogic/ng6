import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  user$: Object;
  userAlbums$: Object;
  userPosts$: Object;
  userTodos$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe(params => this.user$ = params.id);
  }

  ngOnInit() {
    const self = this;

    this.data.getUser(this.user$).subscribe({
      next(data) { 
        self.user$ = data;

        self.data.getUserAlbums(self.user$['id']).subscribe({
          next(data) {
            self.userAlbums$ = data;
          }
        });

        self.data.getUserPosts(self.user$['id']).subscribe({
          next(data) {
            self.userPosts$ = data;
          }
        });

        self.data.getUserTodos(self.user$['id']).subscribe({
          next(data) {
            self.userTodos$ = data;
          }
        });
      }
    });
  }
}