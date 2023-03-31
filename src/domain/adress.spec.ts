import { Address, State } from '.';

describe('adress', () => {
  it('should be able to create a new adress', () => {
    const adress = new Address({
      zipCode: '68758965',
      address: 'rua fulana',
      city: 'castanhal',
      state: State.PA,
    });

    expect(adress).toBeTruthy();
  });
});
