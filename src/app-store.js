// import { writable } from 'svelte/store';
// for animation use 'tweened' or 'spring' instead of 'writable'. They support only date and numbers
import { tweened } from 'svelte/motion';
import { cubicIn } from 'svelte/easing';

let beginingValue = 0;

const progress = tweened(beginingValue, {
  delay: 0,
  duration: 700,
  easing: cubicIn
});

setInterval(() => {
  progress.set(0.5);
}, 1500);

setInterval(() => {
  progress.set(1);
}, 3000);

setInterval(() => {
  progress.set(0);
}, 4500);

const customProgress = {
  subscribe: progress.subscribe
};

export default customProgress;