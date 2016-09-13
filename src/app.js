import './main.scss'
import data from '../db/data.json'

(function() {

  const app = angular.module('appStore', [])

  app.controller('StoreController', function() {
    this.products = data
  })

  // add functions and controllers


  console.log("Hello Angular Webpack! Testing Testing!")

})()