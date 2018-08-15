import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']

})
export class AlbumsComponent implements OnInit {

  albums$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAlbums().subscribe(
      data => this.albums$ = data
    );
  }
}
