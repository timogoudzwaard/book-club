import Header from '../../components/header/header';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextField from '../../components/form/text-field';

const SignIn = () => {
  const renderSignInForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          let errors = {};

          // email
          if (!values.email) {
            errors = { ...errors, email: 'This field is required' };
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors = { ...errors, email: 'Invalid email address' };
          }

          // password
          if (!values.password) {
            errors = { ...errors, password: 'This field is required' };
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextField type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />

            <TextField type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />

            <button
              className="mt-4 shadow-md px-4 py-2 rounded-md ring-1 ring-black ring-opacity-5 font-medium text-white transition bg-indigo-600 hover:bg-indigo-700"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div>
      <Header />

      <main className="container mx-auto p-2">
        <div className="p-6 mt-4 ring-1 ring-black ring-opacity-5 max-w-sm mx-auto bg-white rounded-xl shadow-md">
          <div>
            <h1 className="text-xl font-medium text-black">Sign in</h1>
            <p className="text-gray-500">
              Use your credentials to sign in to your account
            </p>

            {renderSignInForm()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
