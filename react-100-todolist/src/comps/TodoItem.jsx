const TodoItem = (props) => {
  const { todo, functions } = props;
  const { todo_delete, todo_complete } = functions;
  return (
    <tr className={todo.t_comp ? "line flag" : "flag"}>
      <td onClick={() => todo_complete(todo.t_id)}>{todo.t_data}</td>
      <td onClick={() => todo_delete(todo.t_id)}>&times;</td>
    </tr>
  );
};

export default TodoItem;
