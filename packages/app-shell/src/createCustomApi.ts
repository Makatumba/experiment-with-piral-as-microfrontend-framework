/**
 * https://docs.piral.io/guidelines/tutorials/13-sharing-from-piral
 * Extending the Pilet API
 * The best way to share functions (or information in general) is to provide an API from the Piral instance. For simple (and not so important) parts this may be overkill, but for anything crucial it's the best way to go.
 *
 * There are several reasons:
 *
 * An API is well defined
 * An API is visible / strongly typed
 * An API can be customized per pilet
 * APIs are protected and cannot be changed
 *
 */

import { piletColors } from './color-legend/colors';

export interface CustomApi {
    customApiStuff: (paramFromPilet: string) => string;
    getPiletColorCode: () => string;
}

declare module 'piral-core/lib/types/custom' {
    interface PiletCustomApi extends CustomApi {}
}

export const createCustomApi = () => {
    const customApiStorage = [];
    return (context) => {
        return (api, meta) => ({
            customApiStuff: (paramFromPilet) => {
                const user = api.getUser()?.firstName;
                const id = `${paramFromPilet} ${user}`;
                let obj = customApiStorage.find((storedObj) => storedObj.id === id);
                if (!obj) {
                    obj = {
                        id,
                        user,
                        paramFromPilet,
                        counter: 0,
                    };
                    customApiStorage.push(obj);
                }
                obj.counter++;

                const getMessageString = ({ user, paramFromPilet, counter }) =>
                    `${user} used me  ${counter} times in ${paramFromPilet}`;

                return `
You are in ${paramFromPilet}! This is your ${obj.counter}. question.
It is: ${new Date().toTimeString()}. 
Greetings from App-Shell =D...
${customApiStorage.map(getMessageString).join('\n')}`;
            },
            getPiletColorCode: () => piletColors.find(({ piletName }) => piletName === meta.name)?.color,
        });
    };
};
