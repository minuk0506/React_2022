import { useState, useEffect } from "react";
import TodoListComp from "./TodoList";
import uuid from "react-uuid";
const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  //   () => {
  //     const TodoBody = JSON.parse(localStorage.getItem("TODOLIST"));
  //     if (TodoBody && TodoBody.length > 0) {
  //       console.log(TodoBody);
  //       return TodoBody;
  //     } else return [];
  //   });

  const onClickEvent = () => {
    // const data = document.querySelector(".input-input").value;

    const todo = {
      t_id: "", //uuid(),
      t_data: "data",
      t_end: "",
    };
    const _todoList = todoList.concat(todo);
    setTodoList(_todoList);
    // setTodoList([...todoList, todo]);
    // console.log(todoList);
  };
  //   useEffect(() => {
  //     console.log("EFF", todoList);
  //     localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  //   }, [todoList]);
  const todo_delete = (id) => {
    const todoRemove = todoList.filter((todo) => {
      return todo.t_id !== id;
    });
    setTodoList(todoRemove);
  };
  return (
    <div className="main-box">
      <div className="box-head">
        <h1>오늘 할 일</h1>
      </div>
      <div className="input-Div">
        <input className="input-input" placeholder="할 일 입력" />
        <button className="input-button" onClick={onClickEvent}>
          추가
        </button>
      </div>
      <TodoListComp todoList={todoList} todo_delete={todo_delete} />
    </div>
  );
};

export default TodoMain;
