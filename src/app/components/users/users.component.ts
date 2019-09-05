import { Component, OnInit } from "@angular/core";
import { User } from "src/app/module/Uesr";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  showuser: boolean = true;
  loaded: boolean = false;
  disableadd: boolean = true;
  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstname: "suvra",
        lastname: "naskar",
        age: 21,
        address: {
          street: "MG road",
          city: "Kolkata",
          state: "WB"
        },
        image: "http://lorempixel.com/600/600/people/3"
      },
      {
        firstname: "Sathi",
        lastname: "Guho",
        age: 18,
        address: {
          street: "Kulpi  road",
          city: "Kolkata",
          state: "WB"
        },
        image: "http://lorempixel.com/600/600/people/2"
      },
      {
        firstname: "Jayadrata",
        lastname: "Midday",
        age: 22,
        address: {
          street: "BP",
          city: "Canning",
          state: "WB"
        },
        image: "http://lorempixel.com/600/600/people/1"
      }
    ];
    this.loaded = true;

    // //this.showuser = false;
    // this.adduser({
    //   firstname: "Jimmmy",
    //   lastname: "Hitler"
    // });
  }

  adduser(user: User) {
    this.users.push(user);
  }
}
