const {priority,reservation,add} = require('./priorityqueue');

test('Check priority class', () => {
  expect(priority("Business Class")).toBe(2);
  expect(priority("First Class")).toBe(1);
  expect(priority("Economy Class")).toBe(3);
});