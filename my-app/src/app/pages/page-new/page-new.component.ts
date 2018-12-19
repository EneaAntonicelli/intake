import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-new",
  templateUrl: "./page-new.component.html",
  styleUrls: ["./page-new.component.css"]
})
export class PageNewComponent implements OnInit {
  questions = ["YES", "NO", "I DON'T KNOW"];
  submitted = false;
  questionAnswer = [];

  onSubmit() {
    this.submitted = true;
  }

  Q1: any;
  Q2: any;
  Q3: any;
  Q4: any;

  constructor() {
    this.Q1 = {
      title: "Question 1",
      question: "What is the estimated value of the contract/request?"
    };
    this.Q2 = {
      title: "Question 2",
      question:
        "1.	This acquisition is subject to the Department of Technology’s Procurement Authority because it is related to a new or active reportable IT project (meets one or more of the criteria listed in SAM Section 4819.37) and either exceeds the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold OR the acquisition is exempt from DGS oversight."
    };
    this.Q3 = {
      title: "Question 3",
      question:
        "2.	This acquisition is subject to the Department of General Services’ Procurement Authority because it is NOT related to a new or active reportable IT project (does NOT meet one or more of the criteria listed in SAM Section 4819.37) and exceeds the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold."
    };
    this.Q4 = {
      title: "Question 4",
      question:
        "3.	This acquisition is subject to the Agency/state entity’s Procurement Authority because it is within the Agency/state entity’s assigned DGS/PD Delegated Purchasing Authority dollar threshold OR the acquisition is not related to a reportable IT project and exempt from DGS oversight."
    };
  }

  ngOnInit() {}
}
