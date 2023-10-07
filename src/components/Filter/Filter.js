import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { Border, SortDown, SortDownAlt } from "react-bootstrap-icons";


export default function Filter() {
  return (
    <>
      <Container className="d-flex justify-content-end">
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-light text-primary  border-0">Filter:</InputGroup.Text>
              <DropdownButton
                variant="light"
                title="All"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">All</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col md="auto">
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-light text-primary border-0">Sort:</InputGroup.Text>
              <DropdownButton
                variant="light"
                title="Added date"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">Added date</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
                <Button variant="success" id="button-addon2">
                    <SortDown />
                </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
