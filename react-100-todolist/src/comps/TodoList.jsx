import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { todoList, functions } = props;
  const TodoBody = todoList.map((todo) => {
    return <TodoItem todo={todo} functions={functions} key={todo.t_id} />;
  });
  return (
    <table>
      <thead></thead>
      <tbody>{TodoBody}</tbody>
    </table>
  );
};

export default TodoList;
