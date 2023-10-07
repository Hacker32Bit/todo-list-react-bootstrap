import { InputGroup, Form, Button } from "react-bootstrap";
import { Calendar3 } from "react-bootstrap-icons";

export default function AddItem() {
  return (
    <>
      <InputGroup size="lg" className="my-4">
        <Form.Control
          placeholder="Add item..."
          aria-label="Add item..."
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary"><Calendar3 /></Button>
        <Button variant="primary" id="button-addon2">
          Add
        </Button>
      </InputGroup>
    </>
  );
}
