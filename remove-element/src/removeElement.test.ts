import removeElement from "./removeElement";

describe('Remove Element', () => {
  it('should be defined', () => {
    expect(removeElement).toBeDefined();
  });

  it('should remove elements from array', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });

  it('should remove elements from array', () => {
    expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5);
  });
});
