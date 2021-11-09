import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { AngularPocPage } from './AngularPocPage';
import { AngularPocTile } from './AngularPocTile';
import { piralApi, PiralApiService } from '../PiralApiService';

@NgModule({
    declarations: [AngularPocPage, AngularPocTile],
    exports: [AngularPocPage, AngularPocTile],
    bootstrap: [AngularPocPage, AngularPocTile],
    imports: [CommonModule, ReactiveComponentModule],
    providers: [{ provide: PiralApiService, useValue: piralApi }],
})
export class AngularPocModule {}
