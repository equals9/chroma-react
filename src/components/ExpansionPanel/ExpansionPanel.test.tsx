import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { ExpansionPanel, ExpansionPanelProps } from './';

const testId = 'ExpansionPanel';

const getBaseProps = (): ExpansionPanelProps => ({
  ariaOwnsId: 'unique-id',
  title: 'title',
});

test('it renders an ExpansionPanel', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders ExpansionPanel expanded content on-click', async () => {
  const props = getBaseProps();
  const { container, findByTestId } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId}>
      <p>Child content</p>
    </ExpansionPanel>
  );
  const button = container.querySelector(`[aria-expanded="false"]`);
  fireEvent.click(button as Element);

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaExpansionPanel-rootOpen');

  expect(button?.getAttribute('aria-expanded')).toBeTruthy();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId} className="custom-class" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class');
});

test('it calls the provided "onToggle" with the new expanded state', () => {
  let expandedState: boolean = false;
  const onToggle = (newState: boolean) => {
    expandedState = newState;
  };

  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId} onToggle={onToggle} />
  );
  const button = container.querySelector(`[aria-expanded="false"]`);
  fireEvent.click(button as Element);
  expect(expandedState).toBe(true);
});

test('it defaults to open when "isOpen" is provided', async () => {
  const props = getBaseProps();
  const { container, findByTestId } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId} isOpen>
      <p>Child content</p>
    </ExpansionPanel>
  );

  const button = container.querySelector(`[aria-expanded="true"]`);
  const root = await findByTestId(testId);

  expect(root).toHaveClass('ChromaExpansionPanel-rootOpen');
  expect(button?.getAttribute('aria-expanded')).toBeTruthy();
});

test('it uses the provided "contentClassName"', () => {
  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ExpansionPanel
      {...props}
      ariaOwnsId={testId}
      contentClassName="content-class"
    >
      <p>Child content</p>
    </ExpansionPanel>
  );

  const content = container.querySelector(`#${testId}`);
  expect(content).toBeTruthy();
  expect(content).toHaveClass('content-class');
});

test('it uses the provided "innerContentClassName"', () => {
  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ExpansionPanel
      {...props}
      ariaOwnsId={testId}
      innerContentClassName="inner-content-class"
    >
      <p>Child content</p>
    </ExpansionPanel>
  );

  const innerContent = container.querySelector(`#${testId} > div`);
  expect(innerContent).toBeTruthy();
  expect(innerContent).toHaveClass('inner-content-class');
});

test('it updates if "isOpen" changes', async () => {
  const props = getBaseProps();

  const { container } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId}>
      <p>Child content</p>
    </ExpansionPanel>
  );

  const { container: container2, findByTestId } = renderWithTheme(
    <ExpansionPanel {...props} data-testid={testId} isOpen>
      <p>Child content</p>
    </ExpansionPanel>,
    { container }
  );

  const button = container2.querySelector(`[aria-expanded="true"]`);
  const root = await findByTestId(testId);

  expect(root).toHaveClass('ChromaExpansionPanel-rootOpen');
  expect(button?.getAttribute('aria-expanded')).toBeTruthy();
});

test('it applies the row class when `contentDirection="row"', async () => {
  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ExpansionPanel {...props} ariaOwnsId={testId} contentDirection="row">
      <p>Child content</p>
    </ExpansionPanel>
  );

  const innerContent = container.querySelector(`#${testId} > div`);
  expect(innerContent).toBeTruthy();
  expect(innerContent).toHaveClass('ChromaExpansionPanel-directionRow');
});
