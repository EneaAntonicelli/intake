import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-list-definitions",
  templateUrl: "./tab-list-definitions.component.html",
  styleUrls: ["./tab-list-definitions.component.css"]
})
export class TabListDefinitionsComponent implements OnInit {
  itProject: any;
  nonDelegatedItProject: any;
  telecommunications: any;
  projectDelegation: any;
  test = "<h1>test</h1>";
  constructor() {
    this.itProject = {
      definition:
        "Pursuant to Government Code Section 11546(b), the CDT will delegate approval authority for IT Projects to Agencies/state entities based on an assessment of the Agency/entity’s project management, project oversight, and project performance. If an Agency/state entity is assessed to be capable in those respects and the IT project does not meet one or more of the criteria identified in paragraph (B), the IT project will be delegated to the Agency/state entity and the Agency/state entity will have approval authority pursuant to SAM Section 4819.34. Those projects are referred to as “Delegated IT Projects.”"
    };
    this.nonDelegatedItProject = {
      definition:
        "IT Projects are considered Non-Delegated if one or more of the following criteria applies: \n\n1. Initiation of  the IT Project depends upon decisions to be made during the development or enactment of the Governor's Budget, such as approval of a Budget Change Proposal or Budget Revision to increase the Agency/state entity’s existing IT activities related to the IT Project; \n\n2. The IT Project involves a new system development or acquisition that is specifically required by legislative mandate or is subject to special legislative review,as specified in budget control language or other legislation; \n\n3. The IT Project has an anticipated cost that exceeds the Agency/state entity’s delegated cost threshold assigned by the CDT and does not meet the criteria of a desktop and mobile computing commodity expenditure (see SAM Section 4989 – 4989.3); \n\n4. CDT and/or the Agency/state entity’s Agency Information Officer (AIO) has determined that the IT project has criticality/risk factors that warrant continued approval and oversight authority by CDT."
    };
    this.telecommunications = {
      definition:
        "Consolidated Services. Refers to Public safety communications systems and services provided either directly or via contract by DGS designed to serve multiple agencies within a geographic area. Services include communications engineering design, project        management, installation, maintenance, and operations. Specific systems offered by the Office include the Public Safety Microwave network as well as the California Multi Agency Radio System (CMARS).\n\nSystems and Services: Refers to a compilation of communications equipment, staff, or contracts configured to provide end-to-end communications for Public Safety agencies.\n\nCommunications: Refers to the transmission of information by electronic means. This includes telephone, data, radio, microwave, lightwave, video, facsimile, and other forms of electronic transmission.\n\nPublic Safety Agencies: Refers to state agencies whose responsibilities include the safety and protection of life and property within California. That includes agencies connected with official business of law enforcement services, fire services, natural resources services, agricultural services, highway maintenance,transportation, critical infrastructure, and those that are in control of the state or of cities, counties, and other political subdivisions during an emergency, such as the Office of Emergency Services, National Guard, health and safety agencies, and others with primary public safety programs."
    };
    this.projectDelegation = {
      definition:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempore quas illo. Similique, fugit ea. Quisquam ullam rem obcaecati, et ut corrupti. Officia consequuntur, fugiat porro obcaecati debitis repellat. Similique!"
    };
  }

  ngOnInit() {}
}
