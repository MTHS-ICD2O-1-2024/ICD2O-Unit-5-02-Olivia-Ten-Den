// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 22, 2025
// This file contains the JS functions for index.html

"use strict"

function checkNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (document.getElementById('positive').checked) {
    //Do nothing
  }
  else if (document.getElementById('negative').checked) {
    randomNumber = randomNumber * -1;
  }
  document.getElementById('result').innerHTML = "<p>The random number is " + randomNumber + ".</p>";
}
