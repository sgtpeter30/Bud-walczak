const Button = ({text, classList}) => {
  return (
    <button type="button" className={"btn "+classList}>{text}</button>
  );
};

export default Button;
