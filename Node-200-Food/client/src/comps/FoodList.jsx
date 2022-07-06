const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    const eat_kalo = food.f_eat * food.f_kalo;
    return (
      <tr>
        <td>{food.f_date}</td>
        <td>{food.f_name}</td>
        <td>{food.f_eat}</td>
        <td>{food.f_kalo}k</td>
        <td>{eat_kalo}k</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>칼로리</th>
          <th>총 칼로리</th>
        </tr>
      </thead>
      <tbody>{foodBody}</tbody>
    </table>
  );
};
export default FoodList;
