import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage = 'Something went wrong';
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};
