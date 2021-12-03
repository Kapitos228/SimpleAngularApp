import { Component, OnInit } from '@angular/core';
//create model 
export class Artist {
  id: number | undefined;
  name: string | undefined;

}

const ARTISTS: Artist[] = [
  {id: 100, name: "Teen Suicide"},
  {id: 200, name: "Arseniy Krestitel"},
  {id: 300, name: "Johny Goth"},
  {id: 400, name: "PPVK"}
]

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  //create an artist object here
  // artist: Artist = {
  //   id: 1,
  //   name: 'Teen Suicide'
  // }
  artists = ARTISTS
  selectedArtist: Artist | undefined;

  //select artist
  onSelect(artist: Artist){
    this.selectedArtist = artist
  }
  //clear
  clearArtist(): void{
    this.selectedArtist = undefined
  }
  constructor() { }

  ngOnInit(): void {
  }

}
