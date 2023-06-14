import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un Pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon" ></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
pokemon : Pokemon;

constructor (private pokemonService : PokemonService, route : ActivatedRoute) { }

ngOnInit() {
 this.pokemon = new Pokemon();
}




}
