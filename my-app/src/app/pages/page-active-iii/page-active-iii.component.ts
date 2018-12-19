import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-active-iii",
  templateUrl: "./page-active-iii.component.html",
  styleUrls: ["./page-active-iii.component.css"]
})
export class PageActiveIIIComponent implements OnInit {
  submitted = false;
  questionAnswer = [];

  onSubmit() {
    this.submitted = true;
  }

  Q1: any;

  constructor() {
    this.Q1 = {
      title: "Question 1",
      question:
        "Please describe the nature of this amendment. Be sure to provide as much detail as you can."
    };
  }

  ngOnInit() {}
}
