import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { map } from "rxjs/operators";

import { GetPokemonsQueryGQL } from "../services/pokedexGraphql.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonListService: GetPokemonsQueryGQL) {}

  pokemonList$ = this.pokemonListService
    .fetch({ first: 10 })
    .pipe(map(res => res.data.pokemons));

  ngOnInit() {}
}
