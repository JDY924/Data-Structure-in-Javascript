//User Requirement

//Create a system that creates a priority queue for airline boarding.

//First Class = top priority
//Business Class = Second priority
//Economy Class = last priority
//Figure out a method to determine these priorities.
//Hint: A computer by default does not know "top" "second" "last"
function priority(c) {
  const classification = {
    "First Class": 1,
    "Business Class": 2,
    "Economy Class": 3,
  };
  return classification[c];
}

//Create a function that creates an object holding info of passengers
//Create adding functions for the queue returning the queue
//Create removing functions for the queue returing next party and the queue
//Hint return using a dictionary

//Create tests for each main user requirement.

function reservation(name, numberOfPeople, classification) {
  this.name = name;
  this.numberOfPeople = numberOfPeople;
  this.classification = classification;
}

function add(queue, obj) {
  //Step 0: Check if the queue empty
  if (queue.length === 0) {
    queue.push(obj);
  } else {
    //Step1: Find the last number same number in queue
    for (let i = 0; i < queue.length; i++) {
      var rank = priority(queue[i].classification); //returns a number

      //Step 2: Compare the number until it reaches one higher.
      if (rank > priority(obj.classification)) {
        queue.splice(i - 1, 0, obj);
        break;
      }
    }
  }

  return queue;
}

function remove(queue) {
  var current = queue.shift();

  return {
    current: current,
    q: queue,
  };
};


module.exports = {
  priority,
  reservation,
  add,
  remove
};
