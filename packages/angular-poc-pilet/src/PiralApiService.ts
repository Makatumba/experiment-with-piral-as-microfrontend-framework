import { Injectable } from '@angular/core';

import { PiletApi } from 'app-shell';

@Injectable({
    providedIn: 'root',
})
export class PiralApiService {
    private isInitialized = false;
    private _piralInstance: PiletApi;

    get piralInstance() {
        this.throwErrorIfNotInitialized();
        return this._piralInstance;
    }

    customApiStuff() {
        return this.piralInstance.customApiStuff('Angular');
    }

    getUser() {
        return this.piralInstance.getUser();
    }

    initialize(instance: PiletApi) {
        if (Boolean(instance) && !this.isInitialized) {
            this._piralInstance = instance;
            this.isInitialized = true;
        }
    }

    private throwErrorIfNotInitialized() {
        if (!this.isInitialized) {
            throw new Error(`PiralApiService is not Initialized.`);
        }
    }
}

export const piralApi = new PiralApiService();

export const initAppShellCustomApiProvider = (piralInstance: PiletApi) => {
    piralApi.initialize(piralInstance);
};
