import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-list-definitions",
  templateUrl: "./tab-list-definitions.component.html",
  styleUrls: ["./tab-list-definitions.component.css"]
})
export class TabListDefinitionsComponent implements OnInit {
  itProject: any;
  telecommunication: any;
  projectAuthority: any;
  projectDelegation: any;

  constructor() {
    this.itProject = {
      definition:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quibusdam fugit. Libero magni ex unde, impedit voluptatem tempore atque harum nemo et sed blanditiis totam, molestiae ipsum voluptatum enim adipisci."
    };
    this.telecommunication = {
      definition:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaomnis perspiciatis eveniet aperiam voluptate ut ealias fugitquae, earum iusto laboriosam minima pariatur? Repellat id numquam ullam doloribus reprehenderit!"
    };
    this.projectAuthority = {
      definition:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,molestias. Nesciunt nisi repellendus tempora fugit fuga officiisamet, quod placeat reprehenderit excepturi a sunt. Sequi,voluptate! Assumenda veniam sit possimus."
    };
    this.projectDelegation = {
      definition:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempore quas illo. Similique, fugit ea. Quisquam ullam rem obcaecati, et ut corrupti. Officia consequuntur, fugiat porro obcaecati debitis repellat. Similique!"
    };
  }

  ngOnInit() {}
}
