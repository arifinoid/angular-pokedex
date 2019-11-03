import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { GetPokemonsQueryGQL } from "../services/socialNetworkGraphql.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.css"]
})
export class ActivityComponent implements OnInit {
  constructor(private pokemonListService: GetPokemonsQueryGQL) {}
  faComment = faComment;

  pokemonList$ = this.pokemonListService
    .fetch({ first: 5 })
    .pipe(map(res => res.data.pokemons));

  ngOnInit() {}
}
