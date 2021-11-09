# Angular Pilet

-   Die offizielle Doku ist unverständlich...
-   Das ist ein gutes Beispiel: https://github.com/mremolt/piral-app-shell

# Besonderheiten

-   `FromNg()` benimmt sich anders als eine React Componente. => Ein Tile kann nicht in Link gepackt werden =(
-   `defineNgModule()` muss im `setup()` ausgeführt werden, sonst greifen die durch `FromNg()` bereitgestellten Komponenten auf unterschiedliche Service Instanzen zu
-   `Link` tag aus dem react router ist in der Angular welt nicht verfügbar
    -   `angular-router` kann auch nicht für die Navigation vom Tile zur Angular Page benutzt werden
    -   Workaround: `Link` als Piral Extension in Angular bereitstellen => hat irgendwie nicht funktioniert... =(
    -   Workaround: `useHistory()` Hook in Angular bereitstellen => geht nicht, weil the rule of hook
