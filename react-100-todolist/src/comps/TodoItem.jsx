const TodoItem = (props) => {
  const { todo, todo_delete } = props;

  return (
    <tr>
      <td>{todo.t_data}</td>
      <td onClick={() => todo_delete(todo.t_id)}>&times;</td>
    </tr>
  );
};

export default TodoItem;
