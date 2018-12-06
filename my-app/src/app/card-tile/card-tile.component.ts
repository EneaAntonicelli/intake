import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-tile",
  templateUrl: "./card-tile.component.html",
  styleUrls: ["./card-tile.component.css"]
})
export class CardTileComponent implements OnInit {
  new: any;
  current: any;
  archived: any;

  constructor() {
    this.new = {
      title: "NEW",
      summary:
        "summary1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
    this.current = {
      title: "CURRENT",
      summary:
        "summary2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
    this.archived = {
      title: "ARCHIVED",
      summary:
        "summary3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
  }

  ngOnInit() {}
}
