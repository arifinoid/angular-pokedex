import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { GraphQLModule } from "./graphql.module";
import { AppRoutingModule } from "./app-routing.modules";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
