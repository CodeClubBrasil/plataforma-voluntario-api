import { UserValidator, AvailableTimeValidator } from '@domain/entities';
import { Weekday, State } from '@domain/enums';

describe('UserValidator', () => {
  describe('validateName', () => {
    it('should throw an error when validating an empty name', () => {
      expect(() => {
        UserValidator.validateName('');
      }).toThrowError('Name is required');
    });

    it('should throw an error when validating a short name', () => {
      expect(() => {
        UserValidator.validateName('ab');
      }).toThrowError('Invalid name, too short, minimum 3 characters');
    });

    it('should not throw an error when validating a valid name', () => {
      expect(() => {
        UserValidator.validateName('John');
      }).not.toThrowError();
    });
  });

  describe('validateUsername', () => {
    it('should throw an error when validating an empty username', () => {
      expect(() => {
        UserValidator.validateUsername('');
      }).toThrowError('Username is required');
    });

    it('should throw an error when validating a short username', () => {
      expect(() => {
        UserValidator.validateUsername('ab');
      }).toThrowError('Invalid username, too short, minimum 3 characters');
    });

    it('should throw an error when validating a username with spaces', () => {
      expect(() => {
        UserValidator.validateUsername('user name');
      }).toThrowError('Username cannot contain spaces');
    });

    it('should not throw an error when validating a valid username', () => {
      expect(() => {
        UserValidator.validateUsername('john_doe');
      }).not.toThrowError();
    });
  });

  describe('validateTelephone', () => {
    it('should throw an error when validating invalid telephone formats', () => {
      expect(() => {
        UserValidator.validateTelephone(['a2e2e223']);
      }).toThrowError(
        'Invalid telephone format, must be up to 14 digits and contain only numbers.',
      );
      expect(() => {
        UserValidator.validateTelephone(['1234567890123454']);
      }).toThrowError(
        'Invalid telephone format, must be up to 14 digits and contain only numbers.',
      );
    });

    it('should not throw an error when validating a valid telephone format', () => {
      expect(() => {
        UserValidator.validateTelephone(['12345678901234']);
      }).not.toThrowError();
      expect(() => {
        UserValidator.validateTelephone(['1234567890']);
      }).not.toThrowError();
    });
  });

  describe('validateEmail', () => {
    it('should throw an error when validating an invalid email format', () => {
      expect(() => {
        UserValidator.validateEmail('invalid.email');
      }).toThrowError('Invalid email format.');
    });

    it('should not throw an error when validating a valid email format', () => {
      expect(() => {
        UserValidator.validateEmail('valid.email@example.com');
      }).not.toThrowError();
    });
  });

  describe('validatePassword', () => {
    it('should throw an error when validating a password without special characters', () => {
      expect(() => {
        UserValidator.validatePassword('password123');
      }).toThrowError(
        /Invalid password format.*must contain.*uppercase letter.*lowercase letter.*number.*special character.*underscore.*at least 8 characters long/,
      );
    });

    it('should throw an error when validating a password with less than 8 characters', () => {
      expect(() => {
        UserValidator.validatePassword('pass');
      }).toThrowError(
        /Invalid password format.*must contain.*uppercase letter.*lowercase letter.*number.*special character.*underscore.*at least 8 characters long/,
      );
    });

    it('should not throw an error when validating a valid password format', () => {
      expect(() => {
        UserValidator.validatePassword('Valid@Password1!');
      }).not.toThrowError();
    });
  });

  describe('validateCity', () => {
    it('should throw an error when validating an empty city', () => {
      expect(() => {
        UserValidator.validateCity('');
      }).toThrowError('City is required');
    });

    it('should throw an error when validating a short city', () => {
      expect(() => {
        UserValidator.validateCity('ab');
      }).toThrowError('Invalid city, too short, minimum 3 characters');
    });

    it('should not throw an error when validating a valid city', () => {
      expect(() => {
        UserValidator.validateCity('Metropolis');
      }).not.toThrowError();
    });
  });

  describe('validateState', () => {
    it('should throw an error when validating an invalid state', () => {
      expect(() => {
        UserValidator.validateState('InvalidState' as State);
      }).toThrowError('Invalid state value.');
    });

    it('should not throw an error when validating a valid state', () => {
      expect(() => {
        UserValidator.validateState(State.AC);
      }).not.toThrowError();
    });
  });

  describe('validateNeighborhood', () => {
    it('should throw an error when validating an empty neighborhood', () => {
      expect(() => {
        UserValidator.validateNeighborhood('');
      }).toThrowError('Neighborhood is required');
    });

    it('should throw an error when validating a short neighborhood', () => {
      expect(() => {
        UserValidator.validateNeighborhood('ab');
      }).toThrowError('Invalid neighborhood, too short, minimum 3 characters');
    });

    it('should not throw an error when validating a valid neighborhood', () => {
      expect(() => {
        UserValidator.validateNeighborhood('Quietville');
      }).not.toThrowError();
    });
  });

  describe('validateKnowledges', () => {
    it('should throw an error when validating invalid knowledges formats', () => {
      expect(() => {
        UserValidator.validateKnowledges(['ab']);
      }).toThrowError('Invalid knowledge, too short, minimum 3 characters');
    });

    it('should not throw an error when validating valid knowledges formats', () => {
      expect(() => {
        UserValidator.validateKnowledges(['Knowledge1', 'Knowledge2']);
      }).not.toThrowError();
    });
  });
});

describe('AvailableTimeValidator', () => {
  describe('validateWeekday', () => {
    it('should throw an error when validating an invalid weekday', () => {
      expect(() => {
        AvailableTimeValidator.validateWeekday('InvalidWeekday' as Weekday);
      }).toThrowError('Invalid weekday value.');
    });

    it('should not throw an error when validating a valid weekday', () => {
      expect(() => {
        AvailableTimeValidator.validateWeekday(Weekday.MONDAY);
      }).not.toThrowError();
    });
  });
});
