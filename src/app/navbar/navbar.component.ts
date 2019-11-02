import { Component } from "@angular/core";
import {
  faSearch,
  faLongArrowAltUp,
  faUser
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  faSearch = faSearch;
  faLongArrowAltUp = faLongArrowAltUp;
  faUser = faUser;
}
