import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character} from 'src/app/interfaces/charactersResponse';
import { Result } from 'src/app/interfaces/episodeResponse';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters = [];
  character: Character[];
  public page: number;
  episodes = [];
  
  

  //Function
  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop) + 1000;
    const max = (document.documentElement.scrollHeight);

    if (pos > max) {
      if (this.RickAndMortyService.loading) { return; }
      this.RickAndMortyService.getCharacters().subscribe(characters => {
        this.characters.push(...characters);
      });
    }
  }

  constructor(private RickAndMortyService: RickAndMortyService, private router: Router) {

    this.RickAndMortyService.getCharacters()
      .subscribe(characters => {
        //console.log(characters);
        this.characters = characters
      });

    /*this.RickAndMortyService.getEpisodes()
    .subscribe( episode =>{
     //console.log(episode);
     this.episodes = episode;
    });*/
  }


  onCharacterClick( character:Character ){
    //console.log(character);
    this.router.navigate(['/characters', character.id])
  }
}








