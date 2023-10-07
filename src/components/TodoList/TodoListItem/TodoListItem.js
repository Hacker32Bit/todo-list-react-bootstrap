import { Row, Col, ListGroup, Form, Container, Button, ButtonGroup } from "react-bootstrap";
import { Pencil, Trash3, InfoCircleFill, HourglassSplit } from "react-bootstrap-icons";

export default function TodoListItem() {
  return (
    <ListGroup.Item>
      <Row className="justify-content-start">
        <Col md="auto">
          <Form>
            <Form.Check type="checkbox" id="default-checkbox" label="" />
          </Form>
        </Col>
        <Col>
        Variable width content
        </Col>
        <Col xs lg="2">
          <Container className="d-flex justify-content-end">
          <Button variant="outline-warning"><HourglassSplit /> 28th Jun 2023</Button>
          </Container>
        </Col>
        <Col xs lg="2">
          <Container className="d-flex justify-content-end">
            <Row>
              <Col>
                <ButtonGroup aria-label="First group">
                  <Button variant="primary"><Pencil /></Button>
                  <Button variant="danger"><Trash3 /></Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
          <Container className="d-flex justify-content-end">
            <Row>
              <Col>
              <span><InfoCircleFill /> 28th Jun 2023</span>
              </Col>
            </Row>
            </Container>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
