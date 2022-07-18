import { useState } from "react";
import Input from "./Input";
// 컴포넌트 선언하기
// 파일이름과 같은 이름으로 함수 선언
const Main = () => {
  // react는 반드시 감싸는 태그가 있어야 한다.
  // str 변수에서 ""를 사용하는 것처럼 <></> 등 으로 감싼다.
  // Input 컴포넌트에서 사용하는 aName, setAName 을 Main 으로 끌어 올리기
  const [aName, setAName] = useState("");
  const str = "KOREA";
  const body = (
    <>
      <h1>반갑습니다</h1>
      <h2>{aName}</h2>
      <Input aName={aName} setAName={setAName} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam
        error dolor voluptates earum repellat minima in eveniet, nisi est, at
        maxime, nihil aperiam maiores autem sapiente quibusdam expedita
        provident!
      </p>
    </>
  ); // end body
  return body;
};
// 컴포넌트는 반드시 export 해 주어야 한다
// 컴포넌트를 export 하지 않으면 다른 컴포넌트에서 절대 import 할 수 없다.
export default Main;
