import { ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem/TodoListItem";

export default function TodoList({ items, onImportant, onDone, deleteItem }) {

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
              doneDate={item.doneDate}
              id={item.id}
              onImportant={onImportant}
              onDone={onDone}
              deleteItem={deleteItem}
              key={item.id}
            />
          );
        })}
      </ListGroup>
    </>
  );
}
