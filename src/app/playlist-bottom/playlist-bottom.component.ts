import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-playlist-bottom",
  templateUrl: "./playlist-bottom.component.html",
  styleUrls: ["./playlist-bottom.component.scss"]
})
export class PlaylistBottomComponent implements OnInit {
  constructor() {}
  @Input() videos: Array<{}>;
  @Output() videoClicked = new EventEmitter<Object>();
  currentVideo = {};

  onVideoClick(video) {
    this.videoClicked.emit(video);
    this.currentVideo = video;
  }

  ngOnInit() {
    this.currentVideo = this.videos[0];
  }
}
