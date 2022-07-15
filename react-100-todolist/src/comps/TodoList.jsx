import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { todoList, todo_delete } = props;
  const TodoBody = todoList.map((todo) => {
    return <TodoItem todo={todo} todo_delete={todo_delete} key={todo.t_id} />;
  });
  return (
    <table>
      <thead></thead>
      {TodoBody}
    </table>
  );
};

export default TodoList;
