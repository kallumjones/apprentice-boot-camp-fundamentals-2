import { bowl, Game } from "../../main/bowling/bowling";
import { Bowling } from "../../main/bowling/bowlingClass";

describe("Bowling tests", () => {
  it("should calculate score of zero when zero pins are hit", () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const results = bowl(rolls);
    expect(results).toBe(0);
  });

  it("should calculate score for a regular game of bowling (no strikes or spares)", () => {
    const rollsOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const resultsOne = bowl(rollsOne);
    expect(resultsOne).toBe(20);

    const rollsTwo = [0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const resultsTwo = bowl(rollsTwo);
    expect(resultsTwo).toBe(11);
  });

  it("should calculate score for a regular game containingu a spare", () => {
    const rolls = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = bowl(rolls);
    expect(result).toBe(12);

    const rolls2 = [5, 5, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const resultsTwo = bowl(rolls2);
    expect(resultsTwo).toBe(23);
  });

  it('Should calculate score for a single strike', () => {
    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const results = bowl(rolls);
    expect(results).toBe(14);
  })
});

describe('Bowling Class:', () => {
  it('Should calculate score of zero for a gutter game', () => {

    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bowling = new Bowling();
    const results = bowling.calculateScore(rolls);

    expect(results).toBe(0);
  });

  it('should calculate score for a regular game of bowling (no strikes or spares', () => {

    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const bowling = new Bowling();
    const results = bowling.calculateScore(rolls);

    expect(results).toBe(20);
  });


  it('should calculate score for a regular game containing a spare', () => {

    const rolls = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bowling = new Bowling();
    const results = bowling.calculateScore(rolls);

    expect(results).toBe(12);
  });


  it('Should calculate score for a single strike', () => {

    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bowling = new Bowling();
    const results = bowling.calculateScore(rolls);

    expect(results).toBe(14);
  });


  it('Should calculate score for a multiple strikes in a row', () => {

    const rolls = [10, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bowling = new Bowling();
    const results = bowling.calculateScore(rolls);

    expect(results).toBe(35);
  });
  
})