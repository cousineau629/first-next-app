import { Alert } from "react-bootstrap";

export function CheckoutError() {
  return (
    <div>
      {" "}
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          It would appear that our developer is too stupid to add a checkout.
        </p>
      </Alert>
    </div>
  );
}
