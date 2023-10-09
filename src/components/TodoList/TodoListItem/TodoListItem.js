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
    console.log(event.target.checked);
  };

  const currentDay = new Date();
  const isDeadline =
    props.date.getTime() - currentDay.getTime() <= 432000000 ? true : false;
  const deadlineVariant = props.done
    ? "outline-success"
    : props.date.getTime() - currentDay.getTime() < 0
    ? "outline-danger"
    : "outline-warning";

  const deadlineDate = [
    props.date.getDate(),
    monthNames[props.date.getMonth()],
    props.date.getFullYear(),
  ].join(" ");

  return (
    <ListGroup.Item>
      <Row className="justify-content-start d-flex align-items-center">
        <Col md="auto">
          <Form>
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              checked={props.done}
              onChange={handleCheckBox}
              label=""
            />
          </Form>
        </Col>
        <Col>{props.text}</Col>
        {isDeadline || props.done ? (
          <Col xs lg="2">
            <Container className="d-flex justify-content-end">
              <Button variant={deadlineVariant}>
                <HourglassSplit />{" "}
                {props.done
                  ? [ props.doneDate.getDate(),
                      monthNames[props.doneDate.getMonth()],
                      props.doneDate.getFullYear(),
                    ].join(" ")
                  : deadlineDate}
              </Button>
            </Container>
          </Col>
        ) : null}
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
