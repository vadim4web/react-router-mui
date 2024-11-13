# backendless-tabs-jsx
Test assignment for the JavaScript developer position at [backendless.com](backendless.com)  
  
This project serves as a template for a React-based application that implements tabs without backend integration. It showcases various components, including charts, lists, and tables, along with a navigation layout and a router component. The project utilizes modern web development tools and libraries such as React, React Router, Material-UI, and more.

![landscape](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-localhost.png)
![gh-pages](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-gh-pages.png)
![lazy-loading](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-lazy-loading.png)
![hover](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-hover.png)
![not-found](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-not-found.png)

## Project Structure
```arduino
├── docs/
│   ├── screenshot-landscape.png
│   └── screenshot-portrait.png
├── public/
│   ├── 404.html
│   └── react.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── AppContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── MUI-logo.svg
│   │   ├── react.svg
│   │   └── react-router-mark-color.svg
│   ├── components/
│   │   ├── CircularLoader.css
│   │   ├── CircularLoader.jsx
│   │   ├── NavigationLayout.css
│   │   ├── NavigationLayout.jsx
│   │   ├── LinkIcons.jsx
│   │   ├── NoMatchingRoute.css
│   │   └── NoMatchingRoute.jsx
│   ├── layouts/
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Main.css
│   │   └── Main.jsx
│   ├── tabs/
│   │   ├── DummyChart.jsx
│   │   ├── DummyComponent.css
│   │   ├── DummyList.jsx
│   │   └── DummyTable.jsx
│   └── utils/
│       ├── computeHeight.js
│       ├── handleRedirectToTable.js
│       └── renderHTML.js
├── .nojekyll
├── index.html
├── package.json
├── vite.config.js
```

## Project Features
Required Features  
+ React-based CMS: The application is built using React, React Router, and Webpack to function as a simple content management system (CMS).
+ Tab Management: The app fetches a JSON file from a predefined path, which contains tab descriptions, including IDs, titles, orders, and paths to corresponding React components.
+ URL-based Navigation: The app appends the current tab's ID to the URL during tab switching, enabling easy navigation.
+ Default Tab Behavior: The app automatically opens the first tab by default. If the URL already contains a tab ID, that specific tab opens upon app initialization.
+ Lazy Loading: The app adopts a lazy loading approach, loading tab content only when the specific tab is selected, ensuring efficient network usage.
+ Network Efficiency: The app's network usage is optimized, with tab content loaded dynamically only when needed, visible in the browser's Network section.

Additional Features  
+ Customized Material UI Components: Utilizes a customized Material UI library component for enhanced visual appeal and functionality within the application.
+ Responsive Layout: Implements a responsive layout design, ensuring optimal viewing and interaction across various devices and screen sizes.
+ Dynamic Component Example: Includes a dynamic component (DummyTable) as an example, showcasing the rendering of tab content with customized Material UI components.
+ GitHub Pages Integration: The project is committed and hosted on GitHub Pages, facilitating seamless access and evaluation of the application.

## Libraries and Dependencies
1. @emotion/react: A library for writing CSS styles with JavaScript.
2. @emotion/styled: A utility for styling React components with emotion.
3. @mui/icons-material: Material-UI icons as React components.
4. @mui/material: Material-UI components for React.
5. @mui/styled-engine: The styled-engine package for Material-UI.
6. @mui/styled-engine-sc: The styled-engine-sc package for Material-UI.
7. @mui/system: The system package for Material-UI.
8. @mui/x-charts: Material-UI wrapper for D3-based reusable chart library.
9. prop-types: Runtime type checking for React props and similar objects.
10. react: A JavaScript library for building user interfaces.
11. react-dom: Entry point for the DOM-related rendering methods of React.
12. react-router-dom: DOM bindings for React Router.

## Project Link
You can access the project on GitHub Pages [here](https://vadym4che.github.io/backendless-tabs-jsx/dummyTable).