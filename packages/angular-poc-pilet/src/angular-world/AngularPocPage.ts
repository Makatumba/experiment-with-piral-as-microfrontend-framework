import { Component } from '@angular/core';

import { PiralApiService } from '../PiralApiService';
import { CounterService } from './Counter.service';
import { PiletColorService } from './PiletColor.service';

@Component({
    template: `
        <div class="page" [ngStyle]="piletColor.style">
            <h1>Angular Page for {{ piralApi.getUser()?.firstName }}</h1>
            <h3>Counter value: {{ counterService.counter }}</h3>
            <button (click)="counterService.increment()">Increment</button>
            <button (click)="counterService.decrement()">Decrement</button>
            <ul>
                <li>
                    I was able to make Angular work. Kudos to this project and the guy behind it:
                    <a href="https://github.com/mremolt/piral-app-shell">github.com/mremolt/piral-app-shell</a>
                </li>
                <li>I have also managed to use a service to share data between Angular components.</li>
                <li>I can subscribe and emit Piral events</li>
                <li>I was not able to navigate from Angular to dashboard... Maybe ist is not necessary</li>
            </ul>
            <button (click)="runCustomApi()">runCustomApi</button>
            <pre *ngIf="customApiResponse">{{ customApiResponse }}</pre>
        </div>
    `,
})
export class AngularPocPage {
    public customApiResponse: string;
    constructor(
        public counterService: CounterService,
        public piralApi: PiralApiService,
        public piletColor: PiletColorService
    ) {}

    runCustomApi() {
        this.customApiResponse = this.piralApi.customApiStuff();
    }
}
