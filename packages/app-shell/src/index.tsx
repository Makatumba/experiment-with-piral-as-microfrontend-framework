import 'piral/polyfills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import {
  PiralInstance,
  renderInstance,
} from 'piral';
import { createAuthApi } from 'piral-auth';

import { createCustomApi } from './createCustomApi';
import {
  errors,
  layout,
} from './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample';
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

export const piralInstance: PiralInstance = renderInstance({
    plugins: [createAuthApi(), createCustomApi()],
    layout,
    errors,

    requestPilets() {
        return fetch(feedUrl)
            .then((res) => res.json())
            .then((res) => res.items);
    },
});
