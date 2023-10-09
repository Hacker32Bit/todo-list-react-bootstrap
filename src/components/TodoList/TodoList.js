import { ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem/TodoListItem";

export default function TodoList({ items, onImportant, onDone, deleteItem, onEdit }) {

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
              onEdit={onEdit}
              key={item.id}
            />
          );
        })}
      </ListGroup>
    </>
  );
}
