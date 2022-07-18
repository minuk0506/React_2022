const Input = ({ text, setText }) => {
  const onChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <>
      <input onChange={onChange} value={text} placeholder="텍스트입력" />
    </>
  );
};

export default Input;
