// Import stylesheets
import './style.css';

// Write TypeScript code!
let x: number = 7;
let y: number = 11;
const sum: number = x + y;
const result: string = `The sum of ${x} and ${sum}`;
console.log(result);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
