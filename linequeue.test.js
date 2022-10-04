const {Party,add,remove} = require('./linequeue');

//1: What details need to be stored? (min 2 datapoints)
//2: Create a function that stores the details in an object

test('Create a function that stores details of a party', () => {
  const p1 = new Party("Bill", 3);
  expect(p1.name).toBe("Bill");
  expect(p1.numberOfPeople).toBe(3);
});

test('Create adding functions for the queue returning the queue', () => {
  const p1 = new Party("Bill", 3);
  const p2 = new Party("Mary", 4);
  var queue = [];
  var queue = add(queue, p1);
  var queue = add(queue, p2);

  expect(queue[0].name).toBe("Bill");
  expect(queue[1].name).toBe("Mary");
});


test('Create removing functions for the queue returing next party and the queue', () => {
  const p1 = new Party("Bill", 3);
  const p2 = new Party("Mary", 4);
  const p3 = new Party("Manny", 5);
  var queue = [];
  var queue = add(queue, p1);
  var queue = add(queue, p2);
  var queue = add(queue, p3);

  //TODO: Add expect for removing
  var temp = remove(queue);

  expect(temp['current'].name).toBe("Bill");
  expect(temp['queue'][0].name).toBe("Mary");
});