import { main as handler } from '../handler';

describe('it ', () => {
  it('should work ', async () => {
    const response = await handler();
    console.log(response);
    expect(1).toEqual(3);
  });
});
