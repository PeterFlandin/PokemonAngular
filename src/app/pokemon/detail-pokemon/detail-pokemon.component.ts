import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  pokemonList: Pokemon[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => this.pokemon == pokemon);
    }
  }

  goBack(): void {
    this.router.navigate(["/pokemon"]);
  }

  goToEditPokemon(pokemon: Pokemon): void {
    this.router.navigate(["/edit/pokemon", pokemon.id]);
  }

  deletePokemons(pokemon: Pokemon): void {
    this.pokemonService
      .getPokemonById(pokemon.id)
      .subscribe(() => this.goBack());
  }



}


 