import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contract-extension-tiles",
  templateUrl: "./contract-extension-tiles.component.html",
  styleUrls: ["./contract-extension-tiles.component.css"]
})
export class ContractExtensionTilesComponent implements OnInit {
  envoke: any;
  timeAndLabor: any;
  other: any;

  constructor() {
    this.envoke = {
      title: "AMEND / EXTEND MY CURRENT CONTRACT BY INVOKING AN OPTION",
      summary: "",
      image: "../assets/images/new1.jpg"
    };
    this.timeAndLabor = {
      title: "AMEND CONTRACT MAINTENANCE AND OPERATION",
      summary: "",
      image: "../assets/images/current1.jpg"
    };
    this.other = {
      title: "AMEND CONTRACT FOR ANY OTHER REASON",
      summary: "",
      image: "../assets/images/archived1.jpg"
    };
  }

  ngOnInit() {}
}
