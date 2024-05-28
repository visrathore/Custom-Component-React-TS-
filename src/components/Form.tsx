import { ComponentPropsWithoutRef, FormEvent, useRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData); // Converting formData to normal object
    onSave(data);
    formRef.current?.reset();
  };
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
