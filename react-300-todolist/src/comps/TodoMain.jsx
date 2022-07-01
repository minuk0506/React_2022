import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import moment from "moment";
import uuid from "react-uuid";
const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  const insert_todo = (content) => {
    // 여기는 TodoInput 이 전달해준 todo 를 todoList 에 추가하는 곳
    const todo = {
      t_id: uuid(),
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      t_e_date: "",
      content: content,
    };
    // todoList 배열을 모두 복사하고
    // 끝에 todo 를 추가하여
    // todoBody 배열을 생성하라
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };
  return (
    <div className="w3-container w3-margin">
      {/* TodoInput 야 insert_todo 함수를 너에게 보낸다 */}
      <TodoInput insert_todo={insert_todo} />
      {/* TodoList 야 todoList 데이터를 todoList 변수에 담아 보낸다 */}
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
