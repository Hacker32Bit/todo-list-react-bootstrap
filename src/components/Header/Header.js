import { Container } from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";

export default function Header() {
  return (
    <Container className="d-flex justify-content-center">
      <h1 className="text-primary">
        <CheckSquareFill />{" "}
        <span className="text-decoration-underline font-weight-bold">My todo-s</span>
      </h1>
    </Container>
  );
}
