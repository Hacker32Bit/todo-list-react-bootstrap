import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import Filter from "../Filter/Filter"
import TodoList from "../TodoList/TodoList"
import "./app.css";

export default function App() {
  return (
    <Container className="main">
      <Row className="main">
        <Col >
          <Header />
          <AddItem />
          <Container className="mb-4" style={{borderBottom: "1px solid #B0BEC5"}}></Container>
          <Filter />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}
