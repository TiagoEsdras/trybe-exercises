const obj1 = {
  title: 'My Title',
  description: 'My Description',
};
  
const obj2 = {
  description: 'My Description',
  title: 'My Title',
};
  
const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('CompareObejcts', () => {
  test('obj1 must be equal obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  test('obj1 must be different obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
});