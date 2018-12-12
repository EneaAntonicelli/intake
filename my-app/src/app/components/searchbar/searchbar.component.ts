import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  constructor() {}
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      alert("you just clicked enter");
    }
  }
  ngOnInit() {}
}
