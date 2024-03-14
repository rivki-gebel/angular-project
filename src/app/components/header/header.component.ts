import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutButtonComponent } from "../log-out-button/log-out-button.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [LogOutButtonComponent]
})
export class HeaderComponent {
  constructor(private router: Router) { }

  redirectToPageLogin() {
    this.router.navigate(['/login']); 
  }
  redirectToPageRegister() {
    this.router.navigate(['/register']); 
  }
}
