import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contract-tile",
  templateUrl: "./contract-tile.component.html",
  styleUrls: ["./contract-tile.component.css"]
})
export class ContractTileComponent implements OnInit {
  people: any[] = [
    {
      id: "1",
      title: "RFP",
      name: "REQUEST FOR PROPOSAL",
      description: "Descriptive sentence.",
      image: "../assets/images/new1.jpg"
    },
    {
      id: "2",
      title: "RFQ",
      name: "REQUEST FOR QUOTE",
      description: "Descriptive sentence.",
      image: "../assets/images/new1.jpg"
    },
    {
      id: "3",
      title: "RFI",
      name: "REQUEST FOR INFORMATION",
      description: "Descriptive sentence.",
      image: "../assets/images/new1.jpg"
    },
    {
      id: "4",
      title: "RFA",
      name: "REQUEST FOR APPLICATION",
      description: "Descriptive sentence.",
      image: "../assets/images/new1.jpg"
    },
    {
      id: "5",
      title: "RFO",
      name: "REQUEST FOR OFFER",
      description: "Descriptive sentence.",
      image: "../assets/images/new1.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
