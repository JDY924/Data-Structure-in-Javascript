var pq = require("./priorityqueue");

test("Check priority class", () => {
  expect(pq.priority("Business Class")).toBe(2);
  expect(pq.priority("First Class")).toBe(1);
  expect(pq.priority("Economy Class")).toBe(3);
});

test("Check adding class", () => {
  const p1 = new pq.reservation("Bill", 3, "Economy Class");
  const p2 = new pq.reservation("Mary", 2, "First Class");
  var queue = [];
  queue = pq.add(queue, p1);
  queue = pq.add(queue, p2);
  expect(queue[1].name).toBe("Bill");
  expect(queue[0].classification).toBe("First Class");
});

test("Check removing class", () => {
  const p1 = new pq.reservation("Bill", 3, "Economy Class");
  const p2 = new pq.reservation("Mary", 2, "First Class");
  var queue = [];
  queue = pq.add(queue, p1);
  queue = pq.add(queue, p2);

  var temp = pq.remove(queue);
  queue = temp["q"];
  expect(temp["current"].name).toBe("Mary");
  expect(queue[0].name).toBe("Bill");
})