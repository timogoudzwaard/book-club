import Header from '../../components/header/header';
import { ErrorMessage, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import TextField from '../../components/form/text-field';

const SignIn = () => {
  const router = useRouter();

  const signIn = async (username: string, password: string) => {
    return await fetch(
      `/api/sign-in?username=${username}&password=${password}`
    );
  };

  const renderSignInForm = () => {
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          let errors = {};

          // username
          if (!values.username) {
            errors = { ...errors, username: 'This field is required' };
          }

          // password
          if (!values.password) {
            errors = { ...errors, password: 'This field is required' };
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values.username, values.password).then(
            (apiResponse: Response) => {
              if (apiResponse.status === 200) {
                router.push({
                  pathname: '/profile',
                  query: { username: values.username },
                });
              } else {
                console.error('Credentials invalid');
                // do something when credentials are invalid
              }
            }
          );

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextField type="text" name="username" placeholder="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 mt-1"
            />

            <TextField type="password" name="password" placeholder="password" />
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
