# W01D04 - Callbacks!

### To Do
- [x] Functions as values
- [x] Callbacks and higher order functions
- [x] Anonymous functions
- [x] Arrow functions
- [x] Make our own higher order function

map, filter, reduce


2015 ES6 ECMAScript version 6

array
object
function


### Use for..of with everything except objects because Of and Object both start with 'O'


Callback = a function that gets passed to another function to be called by that function
Higher Order Function (HOF) = a function that accepts another function as an argument OR a function that returns another function

$()
jQuery.ajax()



```js
function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
```


```js
const myObj = {
  name: 'alice',
  sayHello: function () {
    return `hello ${this.name}`;
  }
};
```

