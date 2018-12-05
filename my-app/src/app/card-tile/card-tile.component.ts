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
      summary: "summary1",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
    this.current = {
      title: "CURRENT",
      summary: "summary2",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
    this.archived = {
      title: "ARCHIVED",
      summary: "summary3",
      image:
        "http://www.airport-data.com/images/aircraft/thumbnails/001/288/001288330.jpg"
    };
  }

  ngOnInit() {}
}
