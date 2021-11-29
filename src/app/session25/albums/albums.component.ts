import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { album } from '../app-interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService: AlbumsService) { }

  albums: album[];

  ngOnInit(): void {
    this.albums = this.albumService.albums;
  }

}
