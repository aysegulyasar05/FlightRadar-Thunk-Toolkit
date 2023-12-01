import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(10);

  const itemsPerPage = 10;
  const endOffSet = itemOffset + itemsPerPage;

  //items between this area;
  const currentItems = store?.flights.slice(itemOffset, endOffSet);
  // calculate how many page do you have

  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % store?.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Registration no</th>
            <th>latitude</th>
            <th>longitute</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        activeClassName="active"
        pageCount={pageCount}
        nextLabel="Next >>"
        previousLabel="<<Previous"
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default ListView;
