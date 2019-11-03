import { Component, OnInit } from "@angular/core";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  constructor() {}

  faCrosshairs = faCrosshairs;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {}
}
