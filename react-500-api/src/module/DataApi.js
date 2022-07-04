/*
fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "B%2FgqopD1RNWKuvae4eCfdhYcoHdzwJ%2BGVO8Xs9qqYi4Dk5p6ZgWDhK%2Fn4TzyyrCWlAJSAofKw%2FQvAA274tFv2g%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};
export { fetchData };
