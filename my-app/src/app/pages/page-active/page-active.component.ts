import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-active",
  templateUrl: "./page-active.component.html",
  styleUrls: ["./page-active.component.css"]
})
export class PageActiveComponent implements OnInit {
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
      question: "1.	What is the Contract number for this request?"
    };
  }

  ngOnInit() {}
}
