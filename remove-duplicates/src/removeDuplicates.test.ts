import removeDuplicates from "./removeDuplicates";

describe('Remove Element', () => {
  it('should be defined', () => {
    expect(removeDuplicates).toBeDefined();
  });

  it('should remove elements from array', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });

  it('should remove elements from array', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });

  it('should remove elements from array', () => {
    expect(removeDuplicates([2, 2, 3, 3])).toBe(2);
  });
});
