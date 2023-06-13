import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("/api/pokemon").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`/api/pokemon/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response);
  }

  private handleError(error: Error, erreurValue: [] | any) {
    console.error(error);
    return of(erreurValue);
  }

  getPokemonTypeList(): string[] {
    return [
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
