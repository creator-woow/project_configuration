import { render, screen } from '@testing-library/react';
import { Button, ButtonView } from './Button';
import styles from './Button.module.scss';

describe('Button tests', () => {
  test('Button rendered', () => {
    render(<Button>Button test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Button clear view render', () => {
    render(<Button view={ButtonView.CLEAR}>Button test</Button>);
    expect(screen.getByRole('button')).toHaveClass(styles['view-clear']);
  });
});
