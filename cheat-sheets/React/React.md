## What is React?
Javascript library for creating user interfaces.

Created by Facebook in 2011 and released as open-source in 2023.

## Why use React?
- Build rich, interactive UIs
- Component-based arquitecture
- Declarative and easy to read
- Huge ecosystem & community support
- Extremely popular in the industry
- Learn once, use anywhere

## What can be build with React?
**Single Page Apps (SPAs)**
Load a single HTML page and the rest is controlled via Javascript

**Server-Side Rendered (SSR)**
HTML page generated on the server for each request. Help from meta-framework (Next.js)

**Static Websites**
Generate all HTML at build time. Great for Performance and SEO. Frameworks like Gatsby, Astro.

**Mobile Applications**
React NAtive is used to build cross-platform native mobile applications.

**Desktop Applications**
Frameworks like Electron can allow React to be used to create desktop applications.

### Key Concepts
#### Component-based development
A component is a reusable, self-contained piece of the user interface. It can be something simple like a button or the entire page.
React components consist of a function that returns the output in JSX (Javascript XML) format. JSX is a syntax extension that allows you to essentially write HTML in your JS.
Components can also have their own data associated with them called **state**. You can also pass data to a component via **props** (basically HTML attributes).

*Simple component example:*
```jsx
// WelcomeMessage component
function WelcomeMessage({ name }) {
	return <h1>Welcome, {name}!</h1>; // no parentheses needed for a single-line return
}

export default WelcomeMessage;
```

```jsx
// Usage of the WelcomeMessage component
import WelcomeMessage from './WelcomeMessage';

function App() {
	return (
		<div>
			<WelcomeMessage name="Brad" />
			<WelcomeMessage name="Sarah" />
		</div>
	);
}
```

### React.createElement()
This is the core function behind the scenes that builds the UI. Even when you're using JSX, it is using createElement behind the scenes.
```jsx
React.createElement(type, props, ...children);
```
**type**: A string like 'div' or a component function
**props**: Objects with attibutes like 'className' and 'id'
**children**: Any nested content or elements

**JSX vs createElement()**
*create element*
```javascript
function Greeting() {
	return React.createElement('h1', null, 'Hello, World!');
}
```

*JSX*
```jsx
function Greeting() {
	return <h1>Hello, World!</h1>;
}
```
Previously, to create a React application Create-React-App (CRA) was used. Nowadays is better to use Vite (pronunced as Veet)

![[Pasted image 20251107230702.png]]

To create an app with Vite:
```shell
npm create vite@5.2.3 # vite@lastest for the lastest version

cd react-app
npm install # npm i
npm run dev

code . # To open the project in Visual Studio Code
```
![[react_project_structure.png]]
node_modules: contains all the dependencies of the current project
public: contains all the public files and that can be accessed by the user/project, like the image logo

react-dom -> Web
react-native -> Mobile
react-native for Windows + MacOS