import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataService } from '../data.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album$: Object;
  photos$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.album$ = params.id);
  }

  ngOnInit() {
    const self = this;

    self.data.getPost(self.album$).subscribe({
      next(data) { 
        self.album$ = data;
        
        self.data.getAlbumPhotos(self.album$['id']).subscribe(data =>self.photos$ = data);
      }
    });
  }
}