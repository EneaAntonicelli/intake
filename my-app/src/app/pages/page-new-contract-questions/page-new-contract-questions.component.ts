import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-new-contract-questions",
  templateUrl: "./page-new-contract-questions.component.html",
  styleUrls: ["./page-new-contract-questions.component.css"]
})
export class NewContractQuestionsComponent implements OnInit {
  questions = ["YES", "NO", "I DON'T KNOW"];
  submitted = false;

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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ab. Explicabo repellendus delectus obcaecati maiores dolorum veniam earum fugit id tempora! Alias quibusdam voluptatem optio nulla necessitatibus maiores laborum. Illum."
    };
    this.Q2 = {
      title: "Question 1",
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quidem sit ipsam obcaecati minus at dolore exercitationem corporis repellendus voluptatem maiores ad, tempore ut hic fugit dolorem quod consequatur quibusdam!"
    };
    this.Q3 = {
      title: "Question 1",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vitae error repudiandae similique quis molestias dolores iure ipsam quibusdam dolorem possimus sunt rem consequuntur et, ipsum quo maxime nam?"
    };
  }

  ngOnInit() {}
}
