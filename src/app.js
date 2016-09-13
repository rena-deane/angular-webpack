// babel-loader || using ES6 ** \\
import './main.scss';

const arr = [1, 2, 3, 4]

const newArr = arr.reduce((a, b) => {
  return a + b
})

console.log("Hello Angular Webpack! " + newArr)