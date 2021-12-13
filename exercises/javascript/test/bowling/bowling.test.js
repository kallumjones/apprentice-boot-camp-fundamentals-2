import { bowl } from '../../main/bowling/bowling'
describe('Bowling tests', () => {
  test('Should calculate score of basic bowling game', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls)).toBe(0);
  });
});