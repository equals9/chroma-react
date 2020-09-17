import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Button, ButtonProps } from './index';

const testId = 'Button';

const getBaseProps = (): ButtonProps => ({});

test('it renders a Button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId}>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toBeInTheDocument();
  expect(button.getAttribute('type')).toEqual('button');
  expect(button.getAttribute('tabIndex')).toEqual('0');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} className="custom-class-name">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('custom-class-name');
});

test('it renders an icon with the "icon" class name', () => {
  const { getByRole } = renderWithTheme(
    <Button icon={IconComponent}>Button</Button>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveClass('ChromaButton-icon');
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} fullWidth>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-fullWidth');
});

test('it renders with `variant="outlined"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-outlined');
});

test('it renders with `variant="text"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-text');
});

test('it renders a disabled button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} disabled>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toBeDisabled();
  expect(button.getAttribute('tabIndex')).toEqual('-1');
});

// #region inverse tests
test('it renders with `variant="contained" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="contained" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-containedInverse');
});

test('it renders with `variant="outlined" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-outlinedInverse');
});

test('it renders with `variant="text" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButton-textInverse');
});
// #endregion
