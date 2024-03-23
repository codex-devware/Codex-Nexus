const Button = ({ btnCom }) => {
  const { title, defaultStyle, toggleStyle, icon, onClick } = btnCom;
  return (
    <button onClick={onClick} className={`${defaultStyle} ${toggleStyle}`}>
      {icon}
      {title}
    </button>
  );
};

export default Button;
