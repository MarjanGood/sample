import { Injectable } from '@angular/core';
import { album } from './app-interface';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  constructor() { }

  public albums: album[] = [
    {
    id: 1,
    name: 'The piper at Gates of Dawn',
    year:1967,
    albumArt: '/assets/session25/1.jpg',
    songs:[ 
      { 
        trackNumber:1,
        name:'Astronomy Domain',
        duration:'4:17'
      },
      {
        trackNumber:3,
        name:'Astronomy Mother',
        duration:'3:05'
      }]
    },
    {
      id: 2,
      name: 'The piper at Gates of Dawn',
      year:1947,
      albumArt: '/assets/session25/3.jpg',
      songs:[ 
        { 
          trackNumber:1,
          name:'Astronomy Domain',
          duration:'4:17'
        },
        {
          trackNumber:3,
          name:'Astronomy Mother',
          duration:'3:05'
        }]
      },
      {
        id: 3,
        name: 'The piper at Gates of Dawn',
        year:1937,
        albumArt: '/assets/session25/2.jpg',
        songs:[ 
          { 
            trackNumber:1,
            name:'Astronomy Domain',
            duration:'4:17'
          },
          {
            trackNumber:3,
            name:'Astronomy Mother',
            duration:'3:05'
          }]
        }
,
{
  id: 4,
  name: 'The piper at Gates of Dawn',
  year:1920,
  albumArt: '/assets/session25/1.jpg',
  songs:[ 
    { 
      trackNumber:1,
      name:'Astronomy Domain',
      duration:'4:17'
    },
    {
      trackNumber:3,
      name:'Astronomy Mother',
      duration:'3:05'
    }]
  }
,
{
  id: 5,
  name: 'The piper at Gates',
  year:1920,
  albumArt: '/assets/session25/3.jpg',
  songs:[ 
    { 
      trackNumber:1,
      name:'Astronomy Domain',
      duration:'4:17'
    },
    {
      trackNumber:3,
      name:'Astronomy Mother',
      duration:'3:05'
    }]
  }
];

  }

