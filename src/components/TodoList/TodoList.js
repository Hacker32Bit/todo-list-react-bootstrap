import { ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem/TodoListItem";

export default function TodoList(){
    return(<>
        <ListGroup>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </ListGroup>
    </>)
}