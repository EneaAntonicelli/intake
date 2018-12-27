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
      question: "Would this be considered a Delegated IT Project?"
    };
    this.Q3 = {
      title: "Question 3",
      question: "Would this be considered a Non-Delegated IT Project?"
    };
    this.Q4 = {
      title: "Question 4",
      question: "Would this be considered a Telecommunications procurement?"
    };
  }

  ngOnInit() {}
}
