import { fireEvent, render, screen } from '@testing-library/react';
import { renderComponent } from 'shared/utils/tests/renderComponent';
import { Sidebar, SIDEBAR_EXPANDER_ID, SIDEBAR_TEST_ID } from './Sidebar';
import styles from './Sidebar.module.scss';

describe('Sidebar tests', () => {
  test('Sidebar rendered', () => {
    renderComponent(<Sidebar/>);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toBeInTheDocument();
  });

  test('Sidebar expands', () => {
    renderComponent(<Sidebar/>);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toBeInTheDocument();
    const expandButton = screen.getByTestId(SIDEBAR_EXPANDER_ID);
    fireEvent.click(expandButton);
    expect(screen.getByTestId(SIDEBAR_TEST_ID)).toHaveClass(styles.expanded);
  });
});
