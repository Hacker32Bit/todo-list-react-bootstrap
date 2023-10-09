import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import Filter from "../Filter/Filter"
import TodoList from "../TodoList/TodoList"
import "./app.css";

export default function App() {

  const [items, setItems] = useState([
    { text: "Learn JS", important: true, done: false, date: new Date(), id: 1 },
    { text: "Drink Coffee", important: false, done: false, date: new Date(), id: 2 },
    { text: "Learn React", important: false, done: false, date: new Date(), id: 3 },
    { text: "Learn TypeScript", important: true, done: true, date: new Date(), id: 4 },
    { text: "Learn Node.js", important: false, done: false, date: new Date(), id: 5 },
    { text: "Learn extend Node.js", important: false, done: false, date: new Date(), id: 6 },
  ])

  const onAddItem = (text, date) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1

    const newItem = {
      text,
      important: false,
      done: false,
      date,
      id,
    };

    setItems((prevState) => {
      return [...prevState, newItem]
    })
  };

  return (
    <Container className="main">
      <Row className="main">
        <Col >
          <Header />
          <AddItem onAddItem={onAddItem} />
          <Container className="my-4" style={{borderBottom: "1px solid #B0BEC5"}}></Container>
          <Filter />
          <TodoList items={items}/>
        </Col>
      </Row>
    </Container>
  );
}
