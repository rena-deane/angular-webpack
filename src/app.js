// Code goes here
import './main.scss'
import data from '../db/data.json'

(function() {

  angular.module('appStore', [])
  const arr = [1, 2, 3, 4]

  const newArr = arr.reduce((a, b) => {
    return a + b
  })

  // test
  console.log("Hello Angular Webpack!")

})()