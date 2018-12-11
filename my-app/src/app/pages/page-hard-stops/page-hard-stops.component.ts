import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-hard-stops",
  templateUrl: "./page-hard-stops.component.html",
  styleUrls: ["./page-hard-stops.component.css"]
})
export class HardStopsComponent implements OnInit {
  questions = ["YES", "NO", "I DON'T KNOW"];
  submitted = false;
  questionAnswer = [];

  onSubmit() {
    this.submitted = true;
  }

  Q1: any;
  Q2: any;
  Q3: any;

  constructor() {
    this.Q1 = {
      title: "Question 1",
      question:
        "1.	This acquisition is subject to the Department of Technology’s Procurement Authority because it is related to a new or active reportable IT project (meets one or more of the criteria listed in SAM Section 4819.37) and either exceeds the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold OR the acquisition is exempt from DGS oversight."
    };
    this.Q2 = {
      title: "Question 1",
      question:
        "2.	This acquisition is subject to the Department of General Services’ Procurement Authority because it is NOT related to a new or active reportable IT project (does NOT meet one or more of the criteria listed in SAM Section 4819.37) and exceeds the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold."
    };
    this.Q3 = {
      title: "Question 1",
      question:
        "3.	This acquisition is subject to the Agency/state entity’s Procurement Authority because it is within the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold OR the acquisition is not related to a reportable IT project and exempt from DGS oversight."
    };
  }

  ngOnInit() {}
}
