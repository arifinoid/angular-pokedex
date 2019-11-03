import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-channels",
  templateUrl: "./channels.component.html",
  styleUrls: ["./channels.component.css"]
})
export class ChannelsComponent implements OnInit {
  constructor() {}

  arrayOne(n: number): any[] {
    return Array(n);
  }

  arrayTwo(m: number): any[] {
    return Array(m);
  }

  ngOnInit() {}
}
