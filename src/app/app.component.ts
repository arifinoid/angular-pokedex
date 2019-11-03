import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Pokedex Social Network";
  playlist = [
    {
      name: "Arial view of roads",
      source:
        "https://player.vimeo.com/external/293373387.sd.mp4?s=546b9073d6ed62a05e064043589e30a8bb3ce6fa&profile_id=164&oauth2_token_id=57447761",
      thumbnail:
        "https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641467/Screenshot_2019-04-07_at_1.39.17_PM_purcgf.png"
    },
    {
      name: "Blur colorful lights",
      source:
        "https://player.vimeo.com/external/305211631.sd.mp4?s=3d46306a3d07d1c56eb64f1fcb1ba96232e34d90&profile_id=164&oauth2_token_id=57447761",
      thumbnail:
        "https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641309/Screenshot_2019-04-07_at_1.46.12_PM_ztnroy.png"
    }
  ];
  currentVideo = this.playlist[0];

  onVideoChange(video) {
    this.currentVideo = video;
  }
}
