import { Component } from "@angular/core";
import { User } from "../../module/Uesr";

@Component({
  selector: "app-user",
  templateUrl: "./user.components.html",
  styleUrls: ["./user.components.css"]
  // template: `
  //   <h2>suvrajit</h2>
  // `
})
export class usercomponent {
  user: User;

  constructor() {
    this.user = {
      firstname: "suvra",
      lastname: "naskar",
      age: 21,
      address: {
        street: "MG road",
        city: "Kolkata",
        state: "WB"
      }
    };
  }
}
