import { fireEvent, render, screen } from '@testing-library/react';
import { MODAL_CONTENT_TEST_ID, MODAL_OVERLAY_TEST_ID, MODAL_TEST_ID, Modal } from './Modal';

describe('Modal tests', () => {
  test('Modal opened', () => {
    render(<Modal isOpen>lorem lorem</Modal>);
    expect(screen.getByTestId(MODAL_TEST_ID)).toBeInTheDocument();
  });
  test('Modal closes on overlay click', () => {
    render(<Modal isOpen>lorem lorem</Modal>);
    fireEvent.click(screen.getByTestId(MODAL_OVERLAY_TEST_ID));
    setTimeout(() => expect(screen.getByTestId(MODAL_TEST_ID)).not.toBeInTheDocument(), 1000);
  });
  test('Modal doesn\' close on content click', () => {
    render(<Modal isOpen>lorem lorem</Modal>);
    fireEvent.click(screen.getByTestId(MODAL_CONTENT_TEST_ID));
    expect(screen.getByTestId(MODAL_TEST_ID)).toBeInTheDocument();
  });
});
