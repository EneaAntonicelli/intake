import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-soft-questions",
  templateUrl: "./page-soft-questions.component.html",
  styleUrls: ["./page-soft-questions.component.css"]
})
export class PageSoftQuestionsComponent implements OnInit {
  questions = ["YES", "NO", "I DON'T KNOW"];
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  Q1: any;
  Q2: any;
  Q3: any;
  Q4: any;
  Q5: any;
  Q6: any;

  constructor() {
    this.Q1 = {
      title: "Question 1",
      question:
        "Nam id mauris vel dui dignissim fermentum. Etiam consectetur sed risus ac consectetur. Curabitur eu ipsum eget ante congue tempor at vitae lectus. Morbi et odio eget est aliquam posuere. Aliquam pharetra porttitor elit, nec dictum ligula maximus in. Aenean lobortis ipsum justo, id malesuada odio varius faucibus. Maecenas hendrerit egestas justo nec commodo."
    };
    this.Q2 = {
      title: "Question 2",
      question:
        "Praesent sagittis lorem pharetra tincidunt consectetur. Ut a efficitur nisl, sit amet vulputate quam. Praesent pellentesque sodales massa, tempus commodo arcu ultricies vitae. !"
    };
    this.Q3 = {
      title: "Question 3",
      question:
        "Aliquam pulvinar, sapien ut pulvinar bibendum, dui enim mattis nisi, quis dapibus metus erat eget ante. Praesent vehicula pulvinar consequat. Etiam eleifend at odio at commodo."
    };
    this.Q4 = {
      title: "Question 4",
      question:
        "Etiam eleifend at odio at commodo. Aliquam pulvinar, sapien ut pulvinar bibendum, dui enim mattis nisi, quis dapibus metus erat eget ante. Praesent vehicula pulvinar consequat. "
    };
    this.Q5 = {
      title: "Question 5",
      question:
        "Praesent vehicula pulvinar consequat. Aliquam pulvinar, sapien ut pulvinar bibendum, dui enim mattis nisi, quis dapibus metus erat eget ante. Etiam eleifend at odio at commodo."
    };
    this.Q6 = {
      title: "Question 6",
      question:
        "Praesent sagittis lorem pharetra tincidunt consectetur, dui enim mattis nisi, quis dapibus metus erat eget ante. Praesent vehicula pulvinar consequat. Etiam eleifend at odio at commodo."
    };
  }

  ngOnInit() {}
}
