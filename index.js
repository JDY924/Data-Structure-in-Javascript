var pq = require("./priorityqueue");

const p1 = new pq.reservation("Bill", 3, "Economy Class");
const p2 = new pq.reservation("Mary", 2, "First Class");
var queue = [];
var queue = pq.add(queue, p1);
var queue = pq.add(queue, p2);

for (var i = 0; i < queue.length; i++) {
  console.log(queue[i]);
}
