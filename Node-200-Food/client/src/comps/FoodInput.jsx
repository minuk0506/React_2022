import { useState, useEffect } from "react";
import FoodList from "./FoodList";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonFood = await response.json();
    setFoodList(jsonFood);
  };
  useEffect(() => {
    fetchFoodList();
  }, []);
  const food_toggle = () => {
    const food_name = document.querySelector(".f_name").value;
    const food_eat = document.querySelector(".f_eat").value;
    const food_kalo = document.querySelector(".f_kalo").value;

    const food = {
      f_date: "2022-07-06",
      f_name: food_name,
      f_eat: food_eat,
      f_kalo: food_kalo,
    };
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };
  return (
    <>
      <FoodList foodList={foodList} />
      <input placeholder="식품명" className="f_name" />
      <input placeholder="섭취량(숫자만)" className="f_eat" />
      <input placeholder="칼로리(숫자만)" className="f_kalo" />
      <button onClick={food_toggle}>저장</button>
    </>
  );
};
export default FoodInput;
