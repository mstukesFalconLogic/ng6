import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { DataService } from '../data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  thumbnail: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAlbumPhotos(this.album.id).subscribe(data => this.thumbnail = data[0].thumbnailUrl);
  }

}
