import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { count } from 'rxjs';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  // template: `<h1>Hello, World!</h1>`,
  styleUrl: './hello.scss',
})
export class Hello {

    protected title = 'Welcome to Modern Angular!';

    protected isDisable = false;

    onClick() {
        console.log('Button clicked!');
        this.isDisable = !this.isDisable;
    }

    protected count = signal(0);

}
