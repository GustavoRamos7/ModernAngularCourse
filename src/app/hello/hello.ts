import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  // template: `<h1>Hello, World!</h1>`,
  styleUrl: './hello.scss',
})
export class Hello {

    protected title = 'Welcome to Modern Angular!';

}
