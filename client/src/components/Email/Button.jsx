
const Button = ({btnCom} ) => {
 const {title , defaultStyle , toggleStyle, toggle, icon } = btnCom;
  return (
    <button onClick={toggle} className={`${defaultStyle} ${toggleStyle}`}>
    {icon}
   {title}
  </button>

  )
}

export default Button

{/* <Button btnCom={{title : "Calender" , defaultStyle : headerActionBtn ,toggleStyle : backColor?.buttonBG, toggle : handleBtnBg , icon : <IcCalendar color={backColor?.iconColor} /> }}  /> */}
