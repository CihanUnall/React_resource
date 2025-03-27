### React

1- Komponente  
2- Props  
3- Zustandsverwaltung (State Management)  

   - **Komponente**: Seitenabschnitte  
   - **Props**: Datenübertragung zwischen Komponenten  
   - **Zustandsverwaltung**: Daten speichern und verwalten. Holt und verwaltet Daten aus dem Speicher.  

##### Installation  

VS Code - Eine Benutzeroberfläche zum Schreiben von Code  

##### Nützliche Erweiterungen  

- Simple React Snippets  
- ES7 React/Redux/GraphQL/React-Native  
- Auto Rename Tag  
- Panda Theme  
- One Dark Pro Theme  
- Tailwind CSS IntelliSense  
- npm Intellisense  
- Live Server  
- Live Sass Compiler  
- Live Preview  
- Helium Icon Theme  
- VSCode Great Icons  
- Excalidraw  
- Emmet Live  

[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1)  
Dieses Chrome-Plugin ermöglicht eine detaillierte Ansicht von React-Seiten im Entwicklermodus (Inspect).  

##### Nützliche Einstellungen  

- In den **Einstellungen**  
  - `Word Wrap` auf **on** setzen, damit der Code in die nächste Zeile umbricht, wenn er zu lang ist.  
  - `Format On Save` aktivieren, um Code automatisch zu formatieren.  

##### Voraussetzungen für React  

**Node.js** muss installiert sein: [nodejs.org](https://nodejs.org/en)  

Für detaillierte Anweisungen zur Einrichtung: [Vite Guide](https://vite.dev/guide/)  

##### React-Projekt erstellen  

1. Ein neues React-Projekt mit Vite erstellen:  
   ```sh
   npm create vite@latest

        - Projektnamen eingeben

        - Paketnamen eingeben

        - React auswählen

        - JavaScript auswählen

2. In den Projektordner wechseln:        
        
        cd projektname

3. Benötigte Pakete installieren:

        npm i

4. Das Projekt starten:

        npm run dev

5. Das Projekt im Browser öffnen:

        http://localhost:5173/

       

##### React-Icons installieren

        npm install react-icons

Diese Bibliothek ermöglicht die Nutzung von Icons in React.
Installierte Pakete sind in der package.json sichtbar:

             "dependencies": {
                 "react": "^19.0.0",
                 "react-dom": "^19.0.0",
                 "react-icons": "^5.5.0"
             }

Weitere Infos: React Icons
    
         https://react-icons.github.io/react-icons/


##### Nützliche Shortcuts

        clg 

console.log()  

        ctrl+shift+/ 

 Markierte Zeilen auskommentieren

        ctrl+ö  
        
Kommentarzeile erstellen

        Alt + ↑/↓

Zeile hoch/runter verschieben: 

        Windows + ←/→

Fenster teilen: 

------------------------------------------
         
         rfc
           
Wenn Sie schreiben, werden allgemeine Verwendungscodes automatisch auf Ihrer React-Seite angezeigt.
         
###### Beispiel :  
         
         import React from 'react'

         export default function Counter() {
         return (
            <div>
      
            </div>
                )
         }

---------------------------------------------------------

          rfce

###### Beispiel :  

         import React from 'react'

         function Cihan() {
                return (
                <div>
      
                 </div>
                  )
                }

         export default Cihan

-------------------------------------------
         rcc

Class Component

--------------------------------------------
       
        rafce  

 ##### Beispiel :
  
        import React from 'react';

        const Component = () => {
             return <div>Component</div>;
         };

        export default Component;



##### component 

Eine Webseite besteht aus verschiedenen Komponenten.

##### Beispiel:

- Menü auf der linken/rechten Seite

- Header mit Login-Bereich

- Logo im Header

- Footer unten

Diese Komponenten können wiederverwendet werden.

 ##### Props 

 Props werden für den Datenaustausch zwischen Komponenten genutzt.

 ##### UseState


 Mit useState können funktionale Komponenten eigene Zustände verwalten.

##### UseEffect

Der Code in useEffect() wird bei bestimmten Abhängigkeiten erneut ausgeführt.

##### örnek :

          useEffect (() => {
         console.log("It runs when it is first rendered and the last name state value changes.")
                },[lastname]);

Hier wird die Funktion jedes Mal ausgeführt, wenn sich lastname ändert.