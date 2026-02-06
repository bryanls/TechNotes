### React
`import React from 'react';`
**Purpose**: This statement imports the React library, which is essential for creating React components. React is a JavaScript library for building user interfaces, particularly single-page applications where you can create reusable UI components.
**Usage**: 
* You need to import React in any file where you define a React component. This is because JSX (JavaScript XML), which is a syntax extension for JavaScript that looks similar to HTML, is transformed into React.createElement calls. The `React` object is required for this transformation.
* Even if you don't explicitly use `React` in your component code, it is still necessary to import it when using JSX.

**Example:**
```javascript
import React from 'react';

const MyComponent = () => {
    return <div>Hello, World!</div>;
};

export default MyComponent;
```

### ReactDOM
`import ReactDOM from 'react-dom';`
**Purpose**: This statement imports the ReactDOM library, which provides methods to interact with the DOM (Document Object Model). ReactDOM is specifically used for rendering React components to the web page.
**Usage**: 
- You typically use `ReactDOM.render()` to render a React component into a specific DOM element in your HTML. This is how you take your React components and display them in the browser.
* ReactDOM also provides other methods for managing the lifecycle of your React application, such as `ReactDOM.hydrate()` for server-side rendering.

**Example:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => {
    return <div>Hello, World!</div>;
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));
```
