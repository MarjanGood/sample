import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AlbumsService } from 'src/app/session25/albums.service';
import { album } from '../app-interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.sass']
})
export class AlbumDetailsComponent implements OnInit {

   album ?: album = new album();
   warningMessage: string;

  constructor(private albumsService:AlbumsService,
              private route : ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {

    // this.route.params.subscribe((res)=>{
    //  let selectedId: number = +res.id;
    //  setTimeout(() => {
    //   this.album = this.albumsService.albums.find(album => album.id === selectedId);
    //  if(!this.album){
    //   this.router.navigate(['/notfound']);
    //  }
    // },5000);
    // });

    this.route.data.subscribe((data: Data)=>{
      this.album = data['album'];
    });

    this.warningMessage = this.route.snapshot.data['message'];
  }

}
