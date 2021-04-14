import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { map, tap } from'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Character, charactersInterface } from '../interfaces/charactersResponse';
import { SingleCharacter } from '../interfaces/singleCharacterResponse';
import { EpisodeResponse, Result } from '../interfaces/episodeResponse';
import { SingleEpisodeResponse } from '../interfaces/singleEpisodeResponse';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private page = 1;
  //Para saber cuando estoy cargando info
  public loading: boolean = false;

  constructor( private http: HttpClient) {
    //console.log('Rick and Morty API is ready.');
   }
   get params(){
     return { 
       page: this.page.toString()
   }
  }

   //Get Characters
   getCharacters():Observable<Character[]>{
     //Loading characters
    if (this.loading){
      return of([]);
    }
     return this.http.get<charactersInterface>(`${apiUrl}/character`, {
      params: this.params})
      .pipe(
        map( (resp) => resp.results),
        tap( () => {
          this.page += 1;
          // Termina de cargar el resultado
          this.loading = false;
        })
      );
   }

   //Get Single Character
   getSingleCharacter(id:number){
     return this.http.get<SingleCharacter>(`${apiUrl}/character/${id}`)
   }

   //Get Episodes
   getEpisodes():Observable<Result[]>{
    return this.http.get<EpisodeResponse>(`${apiUrl}/episode`)
    .pipe(
      map ( (resp) => resp.results)
    );}

   //Get Single Episode
   getSingleEpisode(id:number){
     return this.http.get<SingleEpisodeResponse>(`${apiUrl}/episode/${id}`)
   }
   

  















}
