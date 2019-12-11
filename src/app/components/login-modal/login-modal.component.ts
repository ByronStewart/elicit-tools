import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"]
})
export class LoginModalComponent implements OnInit {
  email: string = "";
  password: string = "";
  @Output() onClose = new EventEmitter<void>();
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  async submit(e: Event) {
    e.preventDefault();
    this.auth.login(this.email, this.password);
    this.close();
  }

  close() {
    this.onClose.emit();
  }
}
