import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <img src="https://cdn4.iconfinder.com/data/icons/business-conceptual-part3/513/travelling-512.png" />
      <div>
        <h2>Flight Radar</h2>
      </div>
      <h5>
        {store.isLoading
          ? "Waiting..."
          : `${store.flights.length} flight found`}
      </h5>
    </header>
  );
};

export default Header;
