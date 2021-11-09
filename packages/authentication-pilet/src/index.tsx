import * as React from 'react';

import { PiletApi } from 'app-shell';

interface AuthenticationExtension {
    setUserData: (user: { firstName: string; lastName: string; id: string; language: string }) => void;
    user: any;
}

export function setup(app: PiletApi) {
    const style = { backgroundColor: app.getPiletColorCode() };

    app.registerExtension<AuthenticationExtension>('authentication', (props) => {
        const { setUserData, user } = props.params;
        const onAuthenticateJoda = () =>
            setUserData({
                firstName: 'Joda',
                lastName: 'userSurname',
                id: '3090d0b6-367b-4b12-b196-6d5396c6bf26',
                language: 'ua',
            });
        const onAuthenticateZeus = () =>
            setUserData({
                firstName: 'Zeus',
                lastName: 'userSurname',
                id: '8e1c19dc-3d43-11ec-ae47-cb58810555d8',
                language: 'ua',
            });
        return (
            <section style={style}>
                <h1>Fancy Authentication Extension (React)!!!!!</h1>
                <p>
                    Hier wird exemplarisch gezeigt, dass ein Pilet für eine Anmeldung zuständig sein könnte. Mit den
                    unterschiedlichen Buttons werden unterschiedliche Nutzen simuliert.
                </p>
                <p>
                    Die Extension bekommt den setUser Hook aus dem App-Shell und übergibt ihm einen erfolgreich
                    angemeldeten User. Das Anmeldeverfahren ist an dieser Stelle komplett egal.
                </p>
                <button onClick={onAuthenticateJoda}>Joda</button>
                <button onClick={onAuthenticateZeus}>Zeus</button>
            </section>
        );
    });
}
