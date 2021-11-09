import { Injectable } from '@angular/core';

import { PiralApiService } from '../PiralApiService';

@Injectable({
    providedIn: 'root',
})
export class PiletColorService {
    constructor(public piralApi: PiralApiService) {}

    get style() {
        return { 'background-color': this.piralApi.piralInstance.getPiletColorCode() };
    }
}
