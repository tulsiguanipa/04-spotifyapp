import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
// injectable sirve para injeectar en distintos servicios

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('spotify service listo');
  }
//get new realeases y artistas

  getQuery(query:string){
      const url = `https://api.spotify.com/v1/${ query }`;
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAY_KIwCei1WTn0zKubhNPRJ1_MbqrcpLBtpzhwbNtcBr7yFyO1NMb5hUkyz14FVUs3_Qab32I-pjErh10'
  
      });

      return this.http.get(url, {headers});
  }

  getNewReleases(){
    
      //const headers = new HttpHeaders({
      //'Authorization': 'Bearer BQCJfwChNEiKmZfkrBCedm5tH5jRDgWH-AYpdEpgiO3HpEsXYl8qoUvEF9mm8G4s_ePtkOJz_2o4bOfUg78'

    //});

    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data =>data['albums'].items));

   // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
       

  }

  getArtistas(termino:string){
    

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map(data =>data['artists'].items));


// cuando se usar un template string se usa las ``
    
    //this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    //.pipe( map(data =>data['artists'].items));

    // se busca el termino que se esta declarado

  }

  getArtista( id:string){
    

    return this.getQuery(`artists/${id}`)

  }

  getTopTracks( id:string){
    

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(data =>data['tracks']));


  }

}
