import { PlayerClassPipe } from './player-class.pipe';

describe('PlayerClassPipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerClassPipe();
    expect(pipe).toBeTruthy();
  });
});
