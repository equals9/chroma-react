import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TextField, TextFieldProps } from './index';
import * as React from 'react';

const testId = 'TextField';

const getBaseProps = (): TextFieldProps => ({
  id: 'id',
  label: 'Check Label',
});

test('it renders a TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveClass('ChromaTextField-input');
  expect(textfield.getAttribute('aria-describedby')).toBeTruthy();
  expect(textfield.getAttribute('type')).toEqual('text');
  expect(textfield.getAttribute('id')).toBeTruthy();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} data-testid={testId} className="custom-class-name" />
  );

  const textfield = await findByTestId(testId);
  expect(textfield?.parentElement).toHaveClass('custom-class-name');
});

test('it renders a TextField with a secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField {...props} secondaryLabel="(Optional)" data-testid={testId} />
  );

  const secondaryLabel = await findByText('(Optional)');
  expect(secondaryLabel).toBeInTheDocument();
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} hasError data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toHaveClass('ChromaTextField-inputError');
});

test('it renders an error-state TextField with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField
      {...props}
      hasError
      errorMessage="TextField error message"
      data-testid={testId}
    />
  );

  const error = await findByText(/TextField error message/);
  expect(error).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField
      {...props}
      id={undefined}
      name="unique-name"
      data-testid={testId}
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('id')).toEqual('unique-name');
});

test('it renders an inverse color TextField', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <TextField
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="TextArea error message"
      data-testid={testId}
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toHaveClass('ChromaTextField-inputInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');

  const error = await findByText(/TextArea error message/);
  expect(error).toHaveClass('ChromaFormErrorMessage-inverse');

  expect(textfield?.previousSibling).toHaveClass(
    'ChromaTextField-labelInverse'
  );
});

test('it renders a fullWidth TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} fullWidth data-testid={testId} />
  );

  const textField = await findByTestId(testId);
  expect(textField).toHaveClass('ChromaTextField-inputFullWidth');
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextField
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaTextField-labelIcon');
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextField
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaTextField-labelIconInverse');
});
