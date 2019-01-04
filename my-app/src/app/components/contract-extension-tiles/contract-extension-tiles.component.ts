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
      summary:
        "The contract must contain language that allows an option to be invoked",
      image: "../assets/images/new1.jpg"
    };
    this.timeAndLabor = {
      title: "TERMINATE OR CANCEL CONTRACT",
      summary:
        "Contract termination: calls off of an existing contract between two parties \nContract cancellation: usually involves canceling a service ",
      image: "../assets/images/current1.jpg"
    };
    this.other = {
      title: "AMEND CONTRACT FOR ANY OTHER REASON (THIS REQUIRES AN NCB)",
      summary: "",
      image: "../assets/images/archived1.jpg"
    };
  }

  ngOnInit() {}
}
