// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 22, 2025
// This file contains the JS functions for index.html

"use strict"

const optionPostive = document.getElementById('option-positive').checked

function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById('user-number').value)

  // process
  if (optionPositive) {
  const randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById('result').innerHTML =
      '<p>You guessed the right number!</p>'
  }
  else{
    const randomNumber = Math.floor(Math.random() * -6) + 1
  }
}