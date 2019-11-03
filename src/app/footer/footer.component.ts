import { Component, OnInit } from "@angular/core";
import {
  faTwitter,
  faLinkedinIn,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  faTwitter = faTwitter;
  faLinkedin = faLinkedinIn;
  faFacebook = faFacebook;

  ngOnInit() {}
}
