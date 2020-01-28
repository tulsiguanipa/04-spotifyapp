import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// injectable sirve para injeectar en distintos servicios

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('spotify service listo');
  }

  getNewReleases(){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZES7irJ2_cOhkYVN5IrwJhEBpMv6Nl50cPLJg_DCW_JGLp563aOyji1dUjWJHo3pB4cLYl9cPz44LjCU'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});


  }
}
