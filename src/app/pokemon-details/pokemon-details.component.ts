import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
