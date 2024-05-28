import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export type FormWithClear = HTMLFormElement & {
  clear: () => void;
};

const NewForm = forwardRef<FormWithClear, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    //It only works with forwardRef
    useImperativeHandle(ref, () => {
      return {
        clear() {
          formRef.current?.reset();
        },
      } as FormWithClear;
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData); // Converting formData to normal object
      onSave(data);
      // formRef.current?.reset();
    };
    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    );
  }
);

export default NewForm;
