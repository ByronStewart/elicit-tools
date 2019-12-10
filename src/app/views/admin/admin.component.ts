import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authServ: AuthService) {}

  ngOnInit() {}

  login() {
    this.authServ.login(this.email, this.password);
  }

  logout() {
    this.authServ.logout();
  }
}
