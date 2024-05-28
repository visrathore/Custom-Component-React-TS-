import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

//Here we are setting attributes for input element by merging ComponentPropsWithoutRef

//HTMLInputElement is for ref type
//InputProps is for props type
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
