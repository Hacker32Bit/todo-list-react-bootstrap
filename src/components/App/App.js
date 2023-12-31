import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";
import "./app.css";

export default function App() {
  const [items, setItems] = useState([
    {
      text: "Learn JS",
      important: true,
      done: false,
      date: new Date("2023-10-13"),
      doneDate: null,
      id: 1,
    },
    {
      text: "Drink Coffee",
      important: false,
      done: false,
      date: new Date("2024-03-15"),
      doneDate: null,
      id: 2,
    },
    {
      text: "Learn React",
      important: true,
      done: false,
      date: new Date("2025-03-07"),
      doneDate: null,
      id: 3,
    },
    {
      text: "Learn TypeScript",
      important: true,
      done: true,
      date: new Date("2023-07-25"),
      doneDate: new Date("2023-03-05"),
      id: 4,
    },
    {
      text: "Learn Node.js",
      important: false,
      done: false,
      date: new Date("2021-01-04"),
      doneDate: null,
      id: 5,
    },
    {
      text: "Learn extend Node.js",
      important: false,
      done: false,
      date: new Date("2020-04-30"),
      doneDate: null,
      id: 6,
    },
  ]);

  const [isAscending, setIsAscending] = useState(true);
  const [filterSelected, setFilterSelected] = useState("All");
  const [sortSelected, setSortSelected] = useState("Alphabet");

  const onAddItem = (text, date) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const newItem = {
      text,
      important: false,
      done: false,
      date,
      id,
    };

    setItems((prevState) => {
      return [...prevState, newItem];
    });
  };

  const onDone = (id) => {
    setItems((items) => {
      const idx = items.findIndex((el) => el.id === id);

      const newItem = {
        ...items[idx],
        done: !items[idx].done,
        doneDate: items[idx].doneDate ? null : new Date(),
      };

      return [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
    });
  };

  const onImportant = (id) => {
    setItems((items) => {
      const idx = items.findIndex((el) => el.id === id);

      const newItem = {
        ...items[idx],
        important: !items[idx].important,
      };

      return [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
    });
  };

  const deleteItem = (id) => {
    setItems((items) => {
      const idx = items.findIndex((el) => el.id === id);

      return [...items.slice(0, idx), ...items.slice(idx + 1)];
    });
  };

  const onEdit = (id, text, date) => {
    setItems((items) => {
      const idx = items.findIndex((el) => el.id === id);

      const newItem = {
        ...items[idx],
        text,
        date,
      };

      return [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
    });
  };

  const visibleItems = () => {

    let filteredArr = items

    switch (filterSelected) {
      case "Important":
        filteredArr = filteredArr.filter((el) => el.important)
        break
      case "Done":
        filteredArr = filteredArr.filter((el) => el.done)
        break
      case "Less than 5 days":
        filteredArr = filteredArr.filter((el) => el.date.getTime() - new Date().getTime() <= 432000000 && el.date.getTime() - new Date().getTime() > 1)
        break
      case "Time expired":
        filteredArr = filteredArr.filter((el) => new Date().getTime() - el.date.getTime() > 0 && !el.done)
        break
      default:
        break
    }

    switch (sortSelected) {
      case "Alphabet":
        return filteredArr.sort(function (a, b) {
          if (a.text < b.text) {
            return !isAscending;
          }
          if (a.text > b.text) {
            return isAscending;
          }
          return 0;
        });
      case "Deadline date":
        return filteredArr.sort(function (a, b) {
          return isAscending ? a.date - b.date : b.date - a.date;
        });
      default:
        return filteredArr
    }

    
  };

  const sortElemBy = () => {
    setIsAscending((prevState) => !prevState);
  };

  const onFilter = (value) => {
    setFilterSelected(value);
  };

  const onSort = (value) => {
    setSortSelected(value);
  };

  return (
    <Container className="main">
      <Row className="main">
        <Col>
          <Header />
          <AddItem onAddItem={onAddItem} />
          <Container
            className="my-4"
            style={{ borderBottom: "1px solid #B0BEC5" }}
          ></Container>
          <Filter
            filterSelected={filterSelected}
            sortSelected={sortSelected}
            isAscending={isAscending}
            onFilter={onFilter}
            onSort={onSort}
            sortElemBy={sortElemBy}
          />
          <TodoList
            items={visibleItems()}
            onImportant={onImportant}
            onDone={onDone}
            deleteItem={deleteItem}
            onEdit={onEdit}
          />
        </Col>
      </Row>
    </Container>
  );
}
