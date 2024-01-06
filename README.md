# Aufgabe

Diese Übung bietet eine schrittweise Anleitung zur Erstellung einer React-Anwendung, die funktionale Komponenten verwendet und verschiedene wichtige Konzepte wie Komponentenstruktur, Routing, Zustandsverwaltung und Modals umfasst. Durch die Umsetzung der verschiedenen Teile der Aufgabe sollen die Teilnehmer ein besseres Verständnis für die Verwendung funktionaler Komponenten in React-Anwendungen und die Entwicklung wiederverwendbarer Komponenten erlangen.

Das React-Team empfiehlt die Verwendung funktionaler Komponenten, da sie eine einfachere und übersichtlichere Art und Weise bieten, React-Anwendungen zu erstellen. Folglich wird dieses Projekt auf funktionalen Komponenten basieren.

## Bilder (MockUp)
(Screenshot 2024-01-06 at 13.32.02.png)


## Teil 1 - Einrichtung

1. Installation von [Visual Studio Code ](https://code.visualstudio.com/)
2. Installation von [Node.js](https://nodejs.org/en) (Einige Gründe, warum wir Node.js brauchen ist die Entwicklung von JavaScript außerhalb des Browsers sowie für die Verwendung von npm, pnpm und yarn).
3. Erstellen Sie eine [Vite.js-App](https://vitejs.dev/) mit Hilfe von `npm create vite@latest`, `yarn create vite` oder `pnpm create vite`.
4. Verwenden Sie das Node.js-Paket [json-server](https://www.npmjs.com/package/json-server#getting-started), um eine API basierend auf der Datei 'daten.json' zu starten, z.B. `npm install -g json-server`.
5. Installieren Sie [React Router DOM](https://reactrouter.com/en/main), um das Routing in Ihrer mit React Anwendung zu ermöglichen. Dadurch kann eine Navigation zwischen verschiedenen Ansichten oder Seiten realisieren, ohne das die gesamte Seite neu laden muss.
6. Installieren Sie die Extension in Visual Studio Code namens Draw.io Integration

<p>&nbsp;</p>

## Teil 2 - Erste Schritte

1. Erstellen Sie einen Ordner, um die Komponenten zu speichern, die in verschiedenen Bereichen unserer Anwendung wiederverwendet werden sollen.
2. Erstellen Sie einen Ordner, mit dem Namen Pages, in dem wir die Seiten unserer Anwendung speichern können.

> Hinweis:
```bash
├── public
├── src
│   ├── *components
│       ├── ...
│       ├── ...
│       └── ...
│   ├── *pages
│       ├── ...
│       ├── ...
│       └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>

## Teil 3

1. Erstellen Sie eine Komponente namens 'Link', die es uns ermöglicht, zwischen den einzelnen Seiten unserer Anwendung zu navigieren. Mithilfe des React Router DOM kann diese Komponente in verschiedenen Teilen unserer Anwendung wiederverwendet werden. Daher wäre es hilfreich, wenn wir ihren Namen dynamisch ändern könnten, je nachdem, welche Funktion sie erfüllt.

> Hinweis:

Um die 'Link'-Komponente erfolgreich zu erstellen, ist die Integration von 'React-Router Dom' erforderlich.

```bash
├── public
├── src
│   ├── components
│       └── *Link.tsx (Sie können entweder zur Detailseite navigieren oder zur Startseite zurückkehren.) 
│   ├── pages
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>

## Teil 4

1. Entwickeln Sie eine Button-Komponente, die es uns ermöglicht, verschiedene Aktionen auszuführen, wie beispielsweise das Löschen oder Bearbeiten eines Elements. Die Button-Komponente sollte so gestaltet sein, dass sie in verschiedenen Kontexten wiederverwendet werden kann. Dadurch ist es möglich, den Namen oder die Farbe des Buttons je nach Funktion dynamisch anzupassen.

> Hinweis:

```bash
├── public
├── src
│   ├── components
│       ├── Link.tsx
│       └── *Button.tsx  
│   ├── pages
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>


## Teil 5

1. Erstellen Sie eine Komponente, um jeden einzelnen Listeneintrag anzuzeigen (z.B. die Erstellung einer Card-Komponente). Dadurch können wir jedes Element der Liste auf eine visuell ansprechende und strukturierte Weise darstellen.

> Anforderungen

Die Card-Komponente soll folgende Elemente enthalten:
- Name des Elements
- Ein Bild
- einen Button zum Löschen
- einen Button zum Bearbeiten

> Hinweis:
- Es ist noch nicht nötig die Funktionen der Buttons zum implementieren.
- Die Buttons sollen farblich und textlich voneinander unterschieden werden.
- Vergessen Sie nicht die Link Komponente zu Ihrer Card Komponente hinzuzufügen. 

> Hinweis:

```bash
├── public
├── src
│   ├── components
│       ├── Link.tsx
│       ├── Button.tsx 
│       └── *Card.tsx
│   ├── pages
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>

## Teil 6 

1. Erstellen Sie eine Seite im Frontend mit einer Liste der Daten von der API. (Als Erstes sollten wir eine JSON-Datei erstellen. Weitere Informationen dazu finden Sie auf der JSON Server-Seite.)


> Hinweis:

| Was benötigt wird         | Begründung                                                                                                          | 
| ------------------------- |:------------------------------------------------------------------------------------------------------------------- |
| [useEffect](https://react.dev/reference/react/useEffect)         | Seiteneffekte, z.B. Datenabfragen oder manuelle DOM-Manipulationen, nachdem Komponenten gerendert wurden.       | 
| [useState](https://react.dev/reference/react/useState)          | Hook State, z.B. den Zustand innerhalb einer Komponente zu speichern und zu aktualisieren.                      |   
| [promises (async & await)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  | Asynchrone Operationen, z.B. es wird verwendet, um asynchrone Operationen in JavaScript sauber zu verwalten und auf Ergebnisse zu warten, ohne den Hauptfluss zu blockieren. |             
| [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) | Es wird verwendet, um Daten asynchron von einem Server zu laden.                                                   | 

<p>&nbsp;</p>

## Teil 7

1. Erstellen Sie eine Detailseite mit allen Informationen eines Datensatzes.

> Hinweis:

Es ist jetzt an der Zeit, der Link-Komponente in jeder der Card-Komponenten die Funktionalität hinzuzufügen. Wenn wir darauf klicken, sollten wir zur Detailseite weitergeleitet werden. Auf der Detailseite sollte es eine weitere Link-Komponente geben, mit der wir zurück zur Listenseite gelangen können.

Beispiel:
```bash
├── public
├── src
│   ├── components
│       ├── Link.tsx
│       ├── Button.tsx 
│       └── Card.tsx
│   ├── pages
│       ├── DataList.tsx 
│       └── *DetailPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>

## Teil 8

1. Alle Einträge in der Liste können gelöscht werden. (Durch die Verwendung der Button-Komponente)

> Hinweis:

Jedes Element (Card) verfügt über mehrere Buttons, von denen eine es uns ermöglichen sollte, dieses Element aus der Liste zu entfernen. Jetzt ist es an der Zeit, diese Funktionalität hinzuzufügen.


<p>&nbsp;</p>

## Teil 9

1. Im nächsten Schritt werden wir eine modale Komponente entwickeln, die ein Formular bereitstellt, um Elemente hinzuzufügen oder zu bearbeiten.

> Hinweis:

In der Modalkomponente können wir eine unserer zuvor erstellten Komponenten ("Button") wiederverwenden, um das Modal zu schließen oder um die Änderungen zu speichern.

Beispiel:
```bash
├── public
├── src
│   ├── components
│       ├── Link.tsx
│       ├── Button.tsx 
│       ├── Card.tsx
│       └── *Modal.tsx
│   ├── pages
│       ├── DataList.tsx 
│       └── DetailPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

<p>&nbsp;</p>

## Teil 10

1. Es ist an der Zeit, unseren Buttons Funktionen zuzuweisen. Indem wir auf den "hinzufügen"-Button klicken, öffnen wir das Modalfenster, um neue Elemente hinzuzufügen. Wenn wir jedoch den "bearbeiten"-Button betätigen, wird das Modalfenster geöffnet, um das jeweilige Element zu bearbeiten.

> Hinweis:

Verwenden Sie useRef, um auf den Wert des Formulars zugreifen zu können.

<p>&nbsp;</p>

## Teil 11

1. Entwickeln Sie einen Filter, der es ermöglicht, Filme nach ihrem Namen zu filtern.

---

## NodeJS API

Im Rahmen der Anwendungserstellung wählen sie den geeigneten Endpunkt aus dem bereitgestellten Pool aus:

GET:    /filme

GET:    /filme/[id]

DELETE: /filme/[id]

PUT:    /filme/[id]

POST:   /filme [json-body]


## Links
- https://react.dev/
- https://vitejs.dev/
- https://code.visualstudio.com/
- https://nodejs.org/en
- https://www.npmjs.com/
- https://pnpm.io/
- https://yarnpkg.com/
- https://www.npmjs.com/package/json-server
- https://reactrouter.com/en/main
