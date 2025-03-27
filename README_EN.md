### React

1- Component  
2- Props  
3- State Management  

   - **Component**: Sections of the page  
   - **Props**: Used for data transfer between components  
   - **State Management**: Storing and managing data. Retrieves and manages data from storage.  

##### Installation  

VS Code - A code editor interface  

##### Useful Extensions  

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
This Chrome extension provides a detailed view of React pages inside the Inspect panel.  

##### Recommended Settings  

- In **Settings**:  
  - Enable `Word Wrap` to ensure code wraps onto the next line when it is too long.  
  - Enable `Format On Save` to automatically format code when saving.  

##### Prerequisites for React  

You need to install **Node.js**: [nodejs.org](https://nodejs.org/en)  

For a detailed setup guide, visit: [Vite Guide](https://vite.dev/guide/)  

##### Creating a React Project  

1. Create a new React project using Vite:  
   ```sh
   npm create vite@latest

- Enter the project name

- Enter the package name

- Select React

- Select JavaScript

2. Navigate into the project folder:

        cd project-name

3. Install required packages:

        npm i

4. Start the project:

        npm run dev

5. Open the project in a browser:

        http://localhost:5173/


##### Installing React Icons

        npm install react-icons

This library allows you to use icons in React.
Installed packages will appear in package.json:


             "dependencies": {
                 "react": "^19.0.0",
                 "react-dom": "^19.0.0",
                 "react-icons": "^5.5.0"
             }


More details: React Icons

        https://react-icons.github.io/react-icons/


##### Useful Shortcuts

        clg 

console.log()  

        ctrl+shift+/ 

Comment out selected lines

        ctrl+ö  

Add a comment line

        Alt + ↑/↓

Move a line up/down

        Windows + ←/→

Split screen

------------------------------------------

         rfc   

When you write, general usage codes will automatically appear on your React page.
         
###### example :  
         
         import React from 'react'

         export default function Counter() {
         return (
            <div>
      
            </div>
                )
         }

-----------------------------------------------

          rfce

###### example :  

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
        
 ##### example :
  
        import React from 'react';

        const Component = () => {
             return <div>Component</div>;
         };

        export default Component;



##### component 

A webpage is divided into multiple components.

##### example:

- A menu on the left or right side

- A login section in the header

- A logo inside the header

- A footer at the bottom

 These components can be reused across different pages.

 ##### Props 

 Props are used for passing data between components.

 ##### UseState

 The useState hook is used to manage state inside functional components.

##### UseEffect

The code inside useEffect() runs based on dependencies.

##### example :

          useEffect (() => {
         console.log("It runs when it is first rendered and the last name state value changes.")
                },[lastname]);

Here, the function runs every time lastname changes.