import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'ng16-e-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  handleLogin(event: Event) {
    const customEvent = event as CustomEvent;
    console.log('Handling login in parent component:', customEvent.detail);
  }
}
