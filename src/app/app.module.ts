import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { AppRoutingModule } from "./app-routing.modules";
import { NavbarComponent } from "./navbar/navbar.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { MediaPlayerComponent } from "./mediaplayer/mediaplayer.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { PlaylistBottomComponent } from "./playlist-bottom/playlist-bottom.component";
import { ActivityComponent } from "./activity/activity.component";
import { PeopleComponent } from "./people/people.component";
import { ChannelsComponent } from "./channels/channels.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    MediaPlayerComponent,
    PlaylistComponent,
    PlaylistBottomComponent,
    ActivityComponent,
    PeopleComponent,
    ChannelsComponent,
    FooterComponent
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
