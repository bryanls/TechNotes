Javascript is a high-level, object-oriented, multi-paradigm programming language.

![[js_versionhistory.png]]

JS was originally develped by NetScape, but after some time was own by ECMA (European Computer Manufacturers Association). ECMA is now an organization who contributes to tech standars, like:
ECMA 334 -> C#
ECMA 404 -> JSON
ECMA 408 -> Dart
ECMA 262 (ECMAScript) -> Javascript, JScript (deprecated), ActionScript

On ES2015 the following features were introduced: 
let, const, fat arrow functions and classes (which is not really a class)

Browser like Chrome has an engine to run JS, which is called V8. Ryan Dahl embedded V8 open source engine into C++ and now is use in desktop apps, servers, mobile apps, videogames and microprocessors. This creation is better now as NodeJS.
### Variables
![[js_variablescope.png]]

Declaraciones válidas
```javascript
const variable = 'valor';
const Variable = 'valor';
const $variable = 'valor';
const _variable = 'valor';
const variable123 = 'valor';

/*
	Reglas:
	1) Se puede iniciar con $, minúscula, mayúscula y _ (guión bajo)
	2) No se puede iniciar con números pero si usarlos en el resto del nombre
	3) No se puede usar caracteres especiales salvo $ y _
*/
```

### Scope
```javascript
let x = 5 // Disponible como Global (Padre)

{
	let x = 3
	x += y // Es lo mismo que x = x + y
	/* 
	De igual forma para el resto de los operadores:
	-= resta
	*= multiplicación
	/= división
	*/
	console.log()
}
```
Output:
```
8
```

### Tipos de datos

**Primitivos**
Los datos son almacenados en el bloque que fue asignado en al RAM (Stack)
```javascript
// NUMBER
let a = 5 // Entero
let b = 5.5 // Flotante

// STRING
let c = 'Cadena de texto' // String (Texto)

// BOOLEAN
let d = true // Verdadero
let e = false // Falso

// UNDEFINED
let f  // No se asignó valor por lo cual es indefinido

// NULL
let g = null; // Tiene un valor nulo (no tiene valor)
```

**De referencia**
Los datos en un bloque que puede hacer referencia a otro bloque (son almacenados en una memoria dinámica, la cuál puede crecer según se necesita. Es llamada Heap)
```javascript
// ARRAY
let array = [1,2,3...] // Arreglo o lista de números
let array2 = ['HTML','CSS','JS'] // Arreglo o lista de palabras

// OBJECT
let objeto = { // Valor Key : Value
	clave : valor
}

// FUNCTION

// CLASS

// DATE
const date = new Date("06-12-2024") // Fecha en MM-DD-YYYY
```

### Tipado Estático vs Tipado Dinámico
El **tipado estático** es donde el tipo de variable se define desde un inicio, cómo en Java:
String texto = "Hola";
Int número = 14;

El **tipado dinámico** es donde no es necesario definir el tipo de variable, y ésta a su vez puede cambiar su valor, cómo en Javascript (a menos que se use const):
nombre = "John";
nombre = 11;

### Declaraciones y Expresiones
Expressions -> Expresiones
Declaration -> Declaración (en Inglés, de forma Oral)
Statement -> Declaración (en Inglés, de forma Escrita)

Declaration
Cuando vas a crear algo que va a ser referenciado en un futuro
- let
- const
- var no es declaration
- function *
- async function *
- class
- export / import

Statement
- if
- else
- for
- switch

Expression
Cualquier línea de código que evalué en un valor
- 4 + 6 -> 10
- x = 4
- miFuncion()

Cada vez que el código hace algo y se obtiene un valor de éste, es una Expression
Si la porción de código no hace nada, cómo declarar una variable o una función, es una Declaration
Si permite escribir lógica o realizar ciertas tareas, es un Statement

Si no se puede hacer console.log (let, const, for, if), es una Declaration
Si permite hacer un console.log es una Expression
### Operadores Aritméticos
```javascript
let a = 5;
let b = 7;
console.log(a + b); // adición - También usado para concatenar
console.log(a - b); // resta
console.log(a * b); // multiplicacion
console.log(a / b); // division
console.log(a % b); // resto ó módulo (el resto en una divison se refiere al numero que queda como residuo despues de dividir un numero por otro)
console.log(a ** b); // exponenciacion ó potencia

let x = 5;
let y = 5;
x++; // aumentador --> x = 5 + 1; el resultado sera 6
y--; // disminuidor --> y = 5 - 1; el resultado sera 4
```

### Operadores Lógicos
