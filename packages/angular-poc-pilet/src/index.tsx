import './polyfills-import-first';

import * as React from 'react';

import { PiletApi } from 'app-shell';
import {
  defineNgModule,
  fromNg,
} from 'piral-ng/convert';
import { Link } from 'react-router-dom';

import { AngularPocModule } from './angular-world/AngularPoc.module';
import { AngularPocPage } from './angular-world/AngularPocPage';
import { AngularPocTile } from './angular-world/AngularPocTile';
import { initAppShellCustomApiProvider } from './PiralApiService';

const pageName = '/angular-poc';

export function setup(app: PiletApi) {
    initAppShellCustomApiProvider(app);
    defineNgModule(AngularPocModule);
    const style = { backgroundColor: app.getPiletColorCode() };

    app.registerMenu(() => (
        <Link style={style} to={pageName}>
            Angular Poc (Angular :-P)
        </Link>
    ));
    app.registerTile(fromNg(AngularPocTile), {
        initialColumns: 3,
        initialRows: 2,
    });
    app.registerPage(pageName, fromNg(AngularPocPage));
}
