import "./styles/master.css";

import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

import chunk from 'lodash/chunk';

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]);


// @isTestable(true)
// class MyClass { }

// function isTestable(value) {
//     return function decorator(target) {
//         target.isTestable = value;
//     }
// }

// console.log(new MyClass())