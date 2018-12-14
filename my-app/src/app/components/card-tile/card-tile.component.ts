import { Component, OnInit } from "@angular/core";

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
      summary: "Start a new Work Order",
      image: "../assets/images/new1.jpg"
    };
    this.current = {
      title: "ACTIVE",
      summary: "View and/or amend active Contracts",
      image: "../assets/images/current1.jpg"
    };
    this.archived = {
      title: "ARCHIVED",
      summary: "View archived Contracts",
      image: "../assets/images/archived1.jpg"
    };
  }

  ngOnInit() {}
}
