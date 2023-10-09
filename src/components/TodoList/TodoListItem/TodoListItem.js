import { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Container,
  Button,
  ButtonGroup,
  Alert,
  InputGroup,

} from "react-bootstrap";
import {
  Pencil,
  Trash3,
  InfoCircleFill,
  HourglassSplit,
  JournalCheck,
  ClockHistory,
  Calendar3,
  CheckCircleFill,
} from "react-bootstrap-icons";
import Calendar from "react-calendar";

import { validateInput } from "../../../utils/validator";
import ErrorMessages from "../../ErrorMessage";

export default function TodoListItem(props) {

  const [isEdit, setIsEdit] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState(props.date);
  const [inputValue, setInputValue] = useState(props.text);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([])

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

  const handleCheckBox = () => {
    props.onDone(props.id);
  };

  const onImportant = () => {
    props.onImportant(props.id);
  };

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  const onEdit = () => {
    setIsEdit((prevState) => !prevState)
  }

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


  const onCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const onCalendarChange = (date) => {
    setCalendarValue(date);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onBtnClick = () => {
    setShowCalendar(false)

    if (!validateInput(inputValue)) {
      setErrorMessages((prevState) => { return [...prevState, "Input must have more than 2 bymbols!"]})
      setIsError(true);
      return
    }

    props.onEdit(props.id, inputValue, calendarValue)

    setIsError(false)
    setIsEdit(false)
    setErrorMessages([])
  };


  return (
    
    <ListGroup.Item>
      { isEdit ? (
        <>
        <InputGroup size="lg" className="mt-4">
          <Form.Control
            aria-label="Add item..."
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={onInputChange}
          />
          <Button variant="secondary" onClick={onCalendar}>
            <Calendar3 />
          </Button>
          <Button variant="primary" id="button-addon2" onClick={onBtnClick}>
            <CheckCircleFill />
          </Button>
        </InputGroup>
        {showCalendar ? (
          <Container
            className="d-flex justify-content-end"
            style={{
              position: "absolute",
              zIndex: 9999,
              marginLeft: "-92px",
            }}
          >
            <Calendar onChange={onCalendarChange} value={calendarValue} />
          </Container>
        ) : null}
        {isError ? <ErrorMessages errorMessages={errorMessages} /> : null}
      </>
      ) : (
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
        <Col onClick={onImportant}>
          {props.important ? (
            <Alert className="my-0" variant="danger">
              {props.text}
            </Alert>
          ) : (
            props.text
          )}
        </Col>
        {isDeadline || props.done ? (
          <Col xs lg="2">
            <Container className="d-flex justify-content-end">
              <Button variant={deadlineVariant}>
                {props.done ? (
                  <JournalCheck />
                ) : deadlineVariant === "outline-warning" ? (
                  <ClockHistory />
                ) : (
                  <HourglassSplit />
                )}{" "}
                {props.done
                  ? [
                      props.doneDate.getDate(),
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
                  <Button variant="primary" onClick={onEdit}>
                    <Pencil />
                  </Button>
                  <Button variant="danger" onClick={deleteItem}>
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
      </Row> ) }
    </ListGroup.Item>
  );
}
