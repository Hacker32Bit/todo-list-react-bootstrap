import { ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem/TodoListItem";

export default function TodoList({ items }) {
  return (
    <>
      <ListGroup>
        {items.map((item) => {
          return (
            <TodoListItem
              text={item.text}
              important={item.important}
              done={item.done}
              date={item.date}
              key={item.id}
            />
          );
        })}
      </ListGroup>
    </>
  );
}
