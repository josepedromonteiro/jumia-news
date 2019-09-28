import { MockNumberPipe } from './mock-number.pipe';

describe('MockNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MockNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
