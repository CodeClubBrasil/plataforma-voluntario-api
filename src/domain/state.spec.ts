import { State } from './state.enum';

describe('STATE_ENUM', () => {
  it('should return enum values with lenght equal to 2', () => {
    expect(State.PA.length).toEqual(2);
  });
});
