## redux-form recipe

If you're using redux-form as your form library of choice, here are some tips. The important thing to note is that you need to use the `meta` prop provided from redux-form and map those props to the corresponding Chroma component props.

**NOTE**: If you're a LifeOmic employee, you can access these components already setup for you [here](https://github.com/lifeomic/phc-ui/tree/master/packages/phc-web-toolkit/src/components/ChromaReduxForm).

```jsx
import { Field } from 'redux-form';
import {
  TextField,
  TextFieldProps,
} from '@lifeomic/chroma-react/components/TextField';
import { WrappedFieldProps } from 'redux-form';
import * as React from 'react';

interface ReduxTextFieldProps extends WrappedFieldProps, TextFieldProps {}

export const ReduxTextField: React.FC<ReduxTextFieldProps> = ({
  className,
  label,
  name,
  // these are the props we care about from redux-form
  meta: { touched, error, invalid },
  input,
  icon,
  tooltipMessage,
  secondaryLabel,
  placeholder,
  ...rootProps
}) => {
  return (
    <TextField
      className={className}
      // Map the redux-form props to our Chroma props
      hasError={touched && invalid}
      errorMessage={touched && error}
      label={label}
      name={name}
      icon={icon}
      tooltipMessage={tooltipMessage}
      secondaryLabel={secondaryLabel}
      placeholder={placeholder}
      {...input}
      {...rootProps}
    />
  );
};

const MyForm = () => (
  // Other redux-form bits
  <FormBox>
    <Field
      name="name"
      validate={[validation.required]}
      component={ReduxTextField}
      label={formatMessage(messages.name)}
      fullWidth
      // ... any other props to map over to `ReduxTextField`.
    />
  </FormBox>
);
```
