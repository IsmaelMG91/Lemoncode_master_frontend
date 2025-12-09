import {getAvg, getTotalScore} from "./averageService.js"

const arrayCollection = [12, 32, 45, 89];
const totalScore = getTotalScore(arrayCollection);
const average = getAvg(arrayCollection);

const text = `average number is ${average}`;
const spanElement = `total count is ${totalScore}`;

const title = document.createElement("h1");
title.innerText = text;
document.body.appendChild(title);

const span = document.createElement("span");
span.innerText = spanElement;
document.body.appendChild(span);