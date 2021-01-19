import { Field } from 'formik';

const TextField = ({ type, name, placeholder }) => {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="block mt-4 px-4 py-2 w-full rounded-md ring-1 ring-black ring-opacity-5 transition shadow hover:shadow-md"
    />
  );
};

export default TextField;
