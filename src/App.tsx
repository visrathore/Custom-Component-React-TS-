import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form from './components/Form';
import NewForm from './components/NewForm';
import { FormWithClear } from './components/NewForm';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<FormWithClear>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log({ extractedData });
    customRef.current?.clear();
  };
  return (
    <main>
      <Input id="name" label="Name" type="text" ref={inputRef} />
      <Input id="age" label=" Your Age" type="number" />

      <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com" target="_blank">
          Link
        </Button>
      </p>
      <Container>Click Me</Container>

      <Form onSave={handleSave}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label=" Your Age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>

      <NewForm onSave={handleSave} ref={customRef}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label=" Your Age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </NewForm>
    </main>
  );
}

export default App;
