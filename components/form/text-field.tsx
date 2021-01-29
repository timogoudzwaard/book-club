import { Field } from 'formik';

type TextFieldProps = {
  type: 'password' | 'text' | 'email';
  name: string;
  placeholder?: string;
  autocomplete?:
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'email'
    | 'tel'
    | 'bday';
};

const TextField = ({
  type = 'text',
  name,
  placeholder,
  autocomplete,
}: TextFieldProps) => {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete}
      className="block mt-4 px-4 py-2 w-full rounded-md ring-1 ring-black ring-opacity-5 transition shadow hover:shadow-md"
    />
  );
};

export default TextField;
