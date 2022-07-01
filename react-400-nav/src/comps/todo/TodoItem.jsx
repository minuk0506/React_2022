const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.t_id}</td>
      <td>{todo.content}</td>
      <td>{todo.t_s_date}</td>
      <td>{todo.t_e_date}</td>
    </tr>
  );
};
export default TodoItem;
