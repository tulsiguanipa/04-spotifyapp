import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtists: boolean;
  topTracks: any [] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService ) { 
    this.activatedRoute.params.subscribe( params => {

      this.getArtista( params['id'] );
      this.getToTracks( params['id'] );
      //this.loadingArtists = true;
     
    } );
  }

  getArtista( id:string){

    this.loadingArtists = true;

    this.spotify.getArtista(id)
    .subscribe( artista => {
      console.log( artista );
      this.artista = artista;
      this.loadingArtists = false;
    });

  }

  getToTracks( id:string){

    this.spotify.getTopTracks(id)
    .subscribe( topTracks =>{
      console.log( topTracks);
      this.topTracks = topTracks;
    });
  }

}
