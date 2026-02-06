
### Arrow Functions
```javascript
// Regular Function
function getRectangleArea(width, height) {
	return width * height;
}
console.log(getRectangleAre(5, 10)); // 50

// Arrow Function
const getRectangleArea = (width, height) => width * height;
onsole.log(getRectangleAre(5, 10));

const sayHello = () => console.log('Hello');
sayHello(); // Hello
/**
function - removed, instead a variable is placed (const)
return - can get rid of the return keyword and curly braces (implicit return) when having a single expression
*/
```

Arrow function as a Callback
```javascript
const numbers = [1, 2 ,3, 4, 5];

const double = numbers.map(function (number) { // Regular
	return number * 2;
});

const double = numbers.map((number) => number * 2); // Arrow

console.log(double); // [2, 4, 6, 8, 10]
```

Arrow function cannot be accessed before it's initialized
```javascript
// Called BEFORE
regular(); // Regular
arrow(); // Reference Error: Cannot access 'arrow' before initialization

function regular() {
	console.log('Regular');
}

const arrow = () => console.log('Arrow');

// Called AFTER
arrow(); // Arrow
```

Using `this` keyword
```javascript
const person = {
	name: 'Brad',
	sayHelloRegular: function () {
		//console.log('Regular: ', this.name); // Regular: Brad
		console.log(this); // Prints the whole object
	}
	//sayHelloArrow: () => console.log('Arrow: ', this.name); // Arrow: undefined
	sayHelloArrow: () => console.log(this); // Prints and empty object {}
};

person.sayHello();
```
