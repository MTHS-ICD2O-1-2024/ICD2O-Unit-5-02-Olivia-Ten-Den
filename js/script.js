// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 22, 2025
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1;
let optionPositive = document.getElementById('option-positive');
let optionNegative = document.getElementById('option-negative');

function checkNumber() {
  // process
  if (optionPositive.checked) {
    //Do nothing
  }
  else if (optionNegative.checked){
    randomNumber = randomNumber * -1;
  }
  document.getElementById('result').innerHTML = "<p>The random number is " + randomNumber + ".</p>";
}

