import {
  Row,
  Col,
  ListGroup,
  Form,
  Container,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import {
  Pencil,
  Trash3,
  InfoCircleFill,
  HourglassSplit,
} from "react-bootstrap-icons";

export default function TodoListItem(props) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleCheckBox = (event) => {
    console.log(event.target.checked)
  }

  return (
    <ListGroup.Item>
      <Row className="justify-content-start d-flex align-items-center">
        <Col md="auto">
          <Form>
            <Form.Check type="checkbox" id="default-checkbox" checked={props.done} onChange={handleCheckBox} label="" />
          </Form>
        </Col>
        <Col>{props.text}</Col>
        <Col xs lg="2">
          <Container className="d-flex justify-content-end">
            <Button variant="outline-warning">
              <HourglassSplit />{" "}
              {[
                props.date.getDate(),
                monthNames[props.date.getMonth()],
                props.date.getFullYear(),
              ].join(" ")}
            </Button>
          </Container>
        </Col>
        <Col xs lg="2">
          <Container className="d-flex justify-content-end">
            <Row>
              <Col>
                <ButtonGroup aria-label="First group">
                  <Button variant="primary">
                    <Pencil />
                  </Button>
                  <Button variant="danger">
                    <Trash3 />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
          <Container className="d-flex justify-content-end">
            <Row>
              <Col>
                <span>
                  <InfoCircleFill />{" "}
                  {[
                    props.date.getDate(),
                    monthNames[props.date.getMonth()],
                    props.date.getFullYear(),
                  ].join(" ")}
                </span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
