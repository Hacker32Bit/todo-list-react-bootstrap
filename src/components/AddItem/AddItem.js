import { useState } from "react";
import { InputGroup, Form, Button, Container } from "react-bootstrap";
import { Calendar3 } from "react-bootstrap-icons";
import Calendar from "react-calendar";
import { validateInput } from "../../utils/validator";
import ErrorMessages from "../ErrorMessage";
import "react-calendar/dist/Calendar.css";

export default function AddItem(props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([])

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
    if (!calendarValue) {
      setErrorMessages((prevState) => { return [...prevState, "You must choice deadline date!"]})
      setIsError(true)
      return
    }

    props.onAddItem(inputValue, calendarValue);

    setInputValue("")
    setCalendarValue(null)
    setIsError(false)
    setErrorMessages([])

  };

  return (
    <>
      <InputGroup size="lg" className="mt-4">
        <Form.Control
          placeholder="Add item..."
          aria-label="Add item..."
          aria-describedby="basic-addon2"
          value={inputValue}
          onChange={onInputChange}
        />
        <Button variant="secondary" onClick={onCalendar}>
          <Calendar3 />
        </Button>
        <Button variant="primary" id="button-addon2" onClick={onBtnClick}>
          Add
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
  );
}
