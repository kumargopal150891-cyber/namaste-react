import { useRouteError } from "react-router";
const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>{error.status + ":" + error.statusText}</h2>
      <h2>{error.data}</h2>
    </div>
  );
};

export default ErrorComponent;
