import { Component, computed, signal } from '@angular/core';

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

    protected doubleCount = computed(() : any =>  this.count()*2);

    // getDoubleCount() {
    //   console.log('evento do método de Contagem dupla chamado');
    //   return this.count()*2;
    // }

    increateCounter() {
      // count = count + 1;
      this.count.update(value => value + 1);

    }

    decreaseCounter() {
      // count = count - 1;
      this.count.update(value => value - 1);

    }

    resetCounter() {
      // count = count - 1;
      this.count.update(value => value = 0);

    }
}
