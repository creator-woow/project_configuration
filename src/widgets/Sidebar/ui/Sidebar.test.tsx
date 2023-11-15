import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/utils/tests/renderWithTranslation';
import { Sidebar, SIDEBAR_EXPANDER_ID, SIDEBAR_TEST_ID } from './Sidebar';
import styles from './Sidebar.module.scss';

describe('Sidebar tests', () => {
  test('Sidebar rendered', () => {
    render(<Sidebar/>);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toBeInTheDocument();
  });

  test('Sidebar expands', () => {
    renderWithTranslation(<Sidebar/>);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toBeInTheDocument();
    const expandButton = screen.getByTestId(SIDEBAR_EXPANDER_ID);
    fireEvent.click(expandButton);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toHaveClass(styles.expanded);
  });
});
