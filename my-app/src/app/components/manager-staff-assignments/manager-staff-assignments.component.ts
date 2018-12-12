import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manager-staff-assignments",
  templateUrl: "./manager-staff-assignments.component.html",
  styleUrls: ["./manager-staff-assignments.component.css"]
})
export class ManagerStaffAssignmentsComponent implements OnInit {
  constructor() {}
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      alert("you just clicked enter");
    }
  }
  ngOnInit() {}
}
