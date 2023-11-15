import { classNames } from './index';

describe('className', () => {
  test('Dynamic true', () => {
    expect(classNames('class', { dynamic: true })).toBe('class dynamic');
  });

  test('Dynamic false', () => {
    expect(classNames('class', { dynamic: false })).toBe('class');
  });

  test('Dynamic both', () => {
    expect(classNames('class', { dynamic: false, another: true })).toBe('class another');
  });

  test('Correct props', () => {
    expect(classNames('class', { dynamic: true }, ['additional'])).toBe('class dynamic additional');
  });

  test('Empty props', () => {
    expect(classNames('', { }, [])).toBe('');
  });
});
