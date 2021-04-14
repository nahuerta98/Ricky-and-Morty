import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeResponse, Info, Result } from 'src/app/interfaces/episodeResponse';
import { SingleCharacter } from 'src/app/interfaces/singleCharacterResponse';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  singleCharacter: SingleCharacter;
  results: Result[];

  constructor(private activatedRoute: ActivatedRoute, private RickAndMortyService: RickAndMortyService, private location: Location) { }

  ngOnInit(): void {

   const id =  this.activatedRoute.snapshot.params.id;

   this.RickAndMortyService.getSingleCharacter( id )
   .subscribe( singleCharacter =>{
     //console.log(singleCharacter);
     this.singleCharacter = singleCharacter;
   });

    this.RickAndMortyService.getEpisodes()
    .subscribe ( singleEpisode =>{
      //console.log(singleEpisode);
      this.results = singleEpisode;
    });


  }
  returnHome(){
    this.location.back();
  }

}
