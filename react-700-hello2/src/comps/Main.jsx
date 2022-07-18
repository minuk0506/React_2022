import View from "./View";
import Input from "./Input";
import { useState } from "react";
const Main = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Input text={text} setText={setText} />
      <View text={text} />
    </>
  );
};

export default Main;
