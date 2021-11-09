import { Component } from '@angular/core';

import { CounterService } from './Counter.service';
import { PiletColorService } from './PiletColor.service';

@Component({
    template: ` <div [ngStyle]="piletColor.style">
        <p>Angular counter value {{ counterService.counter }}</p>
        <button (click)="counterService.showNotification()">show that glorious notification again</button>
        <strong>No it is not a link, live with it.</strong>
    </div>`,
})
export class AngularPocTile {
    constructor(public counterService: CounterService, public piletColor: PiletColorService) {}
}
