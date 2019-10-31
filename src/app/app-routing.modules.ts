import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
  {
    path: "",
    component: PokemonListComponent
  },
  {
    path: ":id",
    component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
