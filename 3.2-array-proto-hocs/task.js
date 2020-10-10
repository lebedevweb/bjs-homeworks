'use strict';

function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}

function memorize(fn, limit) {
  let memory = [];

  return function(...args) {

    let memorySearch = memory.find(arr => compareArrays(arr.args, args));

    if (memorySearch) {
      return memorySearch.result;
    }

    memory.push({
      args: args,
      result: fn(...args)});

    if (memory.length > limit) {
      memory.shift();
    }

    return memory[memory.length - 1].result;
  }
}