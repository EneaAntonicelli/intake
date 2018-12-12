import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-staff-dropdown",
  templateUrl: "./staff-dropdown.component.html",
  styleUrls: ["./staff-dropdown.component.css"]
})
export class StaffDropdownComponent implements OnInit {
  staff = ["Sandra Moralez", "Philip Sanchez", "Amy Snow", "David Sanchez"];
  submitted = false;
  staffSelection = [];
  constructor() {}

  ngOnInit() {}
}
