//Create a Restaurant Reservation Queue System.

//Hints:
//1: What details need to be stored? (min 2 datapoints)
//2: Create a function that stores the details in an object
//3: Create a queue (NOT NEEDED)
//4: Create adding functions for the queue returning the queue
//5: Create removing functions for the queue returing next party and the queue
//5a: Hint return using a dictionary
//     https://www.javascripttutorial.net/javascript-return-multiple-values/

function Party(name, numberOfPeople) {
  this.name = name;
  this.numberOfPeople = numberOfPeople;
}

function add(queue, obj) {
  queue.push(obj);
  return queue;
}

function remove(queue) {
  var current = queue.shift();

  return {
    current: current,
    queue: queue,
  };
}

module.exports = {
  Party,
  add,
  remove,
};
