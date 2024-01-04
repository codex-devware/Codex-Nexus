const SingleSales = ({ items }) => {
  const { img, name, amount, growth } = items;
  return (
    <div className="border-blue-50 border-2 p-10 rounded-md">
      <img className="w-10 h-10" src={img} alt="" />
      <h3 className="text-xl font-bold ">${amount}</h3>
      <h4 className="font-semibold">{name}</h4>
      <h5>{growth} from yesterday</h5>
    </div>
  );
};

export default SingleSales;
