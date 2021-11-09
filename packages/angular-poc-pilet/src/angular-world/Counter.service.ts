import { Injectable } from '@angular/core';

import { PiralApiService } from '../PiralApiService';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    public counter = 0;
    constructor(public piralApi: PiralApiService) {}

    increment() {
        this.counter += 1;
        this.showNotification();
    }

    decrement() {
        this.counter -= 1;
        this.showNotification();
    }

    showNotification() {
        this.piralApi.piralInstance.showNotification(`Angular has a new value: ${this.counter}`, {
            type: 'info',
        });
    }
}
