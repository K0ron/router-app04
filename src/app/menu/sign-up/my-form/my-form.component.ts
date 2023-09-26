import { Component } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: User = new User('', '', '', '');

  onSubmit(): void {
    console.log('Formulaire envoyé !');
    console.log(this.model);
  }
}
