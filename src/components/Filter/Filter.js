import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { SortDown, SortDownAlt } from "react-bootstrap-icons";

export default function Filter({ filterSelected, sortSelected, isAscending, onFilter, onSort, sortElemBy }) {

  return (
    <>
      <Container className="d-flex justify-content-end">
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-light text-primary  border-0">
                Filter:
              </InputGroup.Text>
              <DropdownButton
                variant="light"
                title={filterSelected}
                id="input-group-dropdown-1"
                onSelect={onFilter}
              >
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="Important">Important</Dropdown.Item>
                <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                <Dropdown.Item eventKey="Less than 5 days">Less than 5 days</Dropdown.Item>
                <Dropdown.Item eventKey="Time expired">Time expired</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col md="auto">
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-light text-primary border-0">
                Sort:
              </InputGroup.Text>
              <DropdownButton
                variant="light"
                title={sortSelected}
                id="input-group-dropdown-2"
                onSelect={onSort}
              >
                <Dropdown.Item eventKey="Alphabet">Alphabet</Dropdown.Item>
                <Dropdown.Item eventKey="Deadline date">Deadline date</Dropdown.Item>
              </DropdownButton>
              <Button variant="success" id="button-addon2" onClick={sortElemBy}>
                {isAscending ? <SortDownAlt /> : <SortDown />}
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
