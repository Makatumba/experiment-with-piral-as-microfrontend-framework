import * as React from 'react';

const components = [
    {
        name: 'Layout',
        description: [
            'ist der Haupteinstiegspunkt der Anwendung',
            'wenn zu einem Pilet navigiert wurde, wird das Pilet als children erhalten',
            'wenn nicht, wird das Dashboard als children erhalten',
            'hält das Grundlayout der Anwendung vor.',
        ],
    },
    {
        name: 'MenuContainer',
        description: ['ist für das Menü der Anwendung verantwortlich', 'bekommt MenuItems als children'],
    },
    { name: 'MenuItem', description: ['entspricht einem Menüeintrag'] },
    {
        name: 'DashboardContainer',
        description: [
            'ist der Container in den die DashboardTile geladen werden',
            'bekommt <DashboardTile> als children',
        ],
    },
    {
        name: 'DashboardTile',
        description: [
            'ist der Container für eine Daschboardkachel',
            'bekommt die Componente die bei der Piletinitializierung als registerTile übergeben wurde als children',
        ],
    },
    { name: 'ErrorInfo', description: ['ist der Container für die Fehlermeldungen'] },
    { name: 'NotificationsHost', description: ['ist der Container in den die Benachrichtigungen geladen werden'] },
    { name: 'NotificationsToast', description: ['ist der Container für einzelne Toast Benachrichtigungen'] },
];

export const ComponentOverview: React.FunctionComponent = () => (
    <article>
        <section>
            <h2>Grundkonzept</h2>
            <p>
                Die Anwendung besteht aus zwei Hauptkomponenten. <b>App Shell</b> und <b>Pilets</b>. Die Erweiterungen
                sind durch <b>PLugins</b> möglich.
            </p>
            <h3>App Shell</h3>
            <ul>
                <li>ist der Hauptcontainer.</li>
                <li>wird als erster geladen.</li>
                <li>verwaltet die einzelnen Pilets</li>
                <li>ist für Plugins und (gemeinsam genutzte Daten) verantwortlich</li>
            </ul>
            <h3>Pilets</h3>
            <ul>
                <li>sind die einzelnen Micro-Frontends ={'>'} Fast unabhängige Apps</li>
                <li>können sowohl separate Seite als auch eine Componenten sein</li>
                <li>können Daten von dem App Shell erhalten und (modifizieren)</li>
            </ul>
        </section>
        <section>
            <h2>Der Piral-Startet wird mit folgenden Componenten out of the box angelegt</h2>
            <ul>
                {components.map(({ name, description }) => (
                    <li key={name.replaceAll(' ', '-')}>
                        <h4>{name}</h4>
                        <ul>
                            {description.map((entry) => (
                                <li key={entry.replaceAll(' ', '-')}>{entry}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    </article>
);
