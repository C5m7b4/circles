import { add, subtract } from '../src/index';

test('should add two numbers', () => {
  expect(add(1, 2)).toEqual(3);
});
test('should subtract', () => {
  expect(subtract(2, 1)).toEqual(1);
});
