/**
 * @description Base interface for all form components.  Extends the <input />
 * element props.  Allows for ReactNode on label prop.
 */
export interface BaseFormElementWithNodeLabel
  extends React.ComponentPropsWithoutRef<'input'> {
  color?: 'default' | 'inverse';
  hasError?: boolean;
  errorMessage?: string;
  helpMessage?: string;
  label: string | React.ReactNode;
}

/**
 * @description Base interface for all form components.  Extends the <input />
 * element props.
 */
export interface BaseFormElement extends BaseFormElementWithNodeLabel {
  label: string;
}

/**
 * @description Base interface for form messages.  These are typically help
 * or error messages.
 */
export interface BaseFormMessage {
  className?: string;
  color?: 'default' | 'inverse';
  /**
   * @description The root form element "id".  This is normally the id
   * applied to an <input /> element.  We use this prop to set the
   * "error-for" and "help-for" attributes.
   */
  rootElementId?: string;
  /**
   * @description A unique indentifier used to set the "id" of this element,
   * which connects it with the root element.  This ensures screen readers
   * can read the error and help messages when one appears.
   * This ID should be something like "error-for-<id-of-input-element>" or
   * "help-for-<id-of-input-element>".
   */
  describedById?: string;
}

/**
 * A utility function to build the `aria-describedby` attribute.
 *
 * @param uniqueId - Unique identifier for the element.
 */
export const buildDescribedBy = (uniqueId: string) => {
  if (!buildDescribedBy) {
    // Type requires either string | undefined
    return undefined;
  }

  return `${errorFor(uniqueId)} ${helpFor(uniqueId)}`;
};

export const errorFor = (uniqueId: string) => `error-for-${uniqueId}`;
export const helpFor = (uniqueId: string) => `help-for-${uniqueId}`;
