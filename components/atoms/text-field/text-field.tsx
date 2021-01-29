import { Field } from 'formik';
import classNames from 'classnames';

type TextFieldProps = {
  type: 'password' | 'text' | 'email';
  name: string;
  placeholder?: string;
  label?: string;
  autocomplete?:
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'email'
    | 'tel'
    | 'bday';
  defaultMargin?: boolean;
};

const TextField = ({
  type = 'text',
  name,
  placeholder,
  autocomplete,
  label,
  defaultMargin,
}: TextFieldProps) => {
  const labelClasses = classNames('block font-semibold', {
    'mt-4': defaultMargin,
  });

  return (
    <label className={labelClasses}>
      {label}
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        className="block mt-1 px-4 py-2 w-full rounded-md ring-1 ring-black ring-opacity-5 transition shadow hover:shadow-md"
      />
    </label>
  );
};

export default TextField;
