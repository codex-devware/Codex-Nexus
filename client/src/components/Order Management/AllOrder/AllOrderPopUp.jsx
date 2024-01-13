const AllOrderPopUp = ({ onClose, options }) => {
  return (
    <div className="popup">
      {options.map((option, index) => (
        <div key={index} onClick={() => onClose(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default AllOrderPopUp;
