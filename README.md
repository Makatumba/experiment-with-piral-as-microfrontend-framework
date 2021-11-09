# Experiment with Piral as a microfrontend framework =D

A project to gain a better understanding of Piral as a microfrontend framework. The main aim is to use Piral with different frameworks and make them share data with each other.

## Setup and docs

-   setup tutorial: https://docs.piral.io/guidelines/tutorials/23-monorepo
-   lerna: https://lerna.js.org/
-   yarn: https://classic.yarnpkg.com/
-   piral: https://docs.piral.io/

## Development

-   clone this repository
-   install dependencies:
    ```
    yarn
    ```
-   build everything:
    ```
    yarn build
    ```
-   start development server with:
    ```
    yarn start
    ```
-   build all pilets:
    ```
    yarn build:pilets
    ```
-   build and debug one pilet:
    ```
    lerna run start --scope foo-pilet --stream
    ```
-   clear all:
    ```
    yarn clear
    ```

## New pilet

-   pilet names should follow this convention `*-pilet` e.g. `foo-pilet`
-   to create a `foo-pilet` run:

    ```
    npx pilet new app-shell --no-install --base packages/foo-pilet
    ```

-   After scaffolding remove following devDependencies, because they are already in the monorepo Package:
    ```
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@types/react-router": "latest",
    "@types/react-router-dom": "latest",
    "@types/node": "latest",
    "typescript": "latest",
    "piral-cli": "0.14.0"
    ```

## Problems

-   Angular pilet

    -   I was not able to create an Angular pilet using only the official documentation and examples
    -   A working solution was found hear: https://github.com/mremolt/piral-app-shell

-   React Router breaking change
    -   Piral version used in this project depends on
        ```
        "react-router": "^5.2.1",
        "react-router-dom": "^5.2.1"
        ```
    -   the dependencies are resolved to `"react-router*": "6"` which has some breaking changes
    -   solution is to add following statements to `package.json`
        ```
        "resolutions": {
            "react-router": "5.2.1",
            "react-router-dom": "5.2.1"
        }
        ```
-   Dependencies
    -   minor and major updates while testing caused problems
    -   this project won't be maintained regularly
    -   exact dependencies are used, to prevent unexpected problems
