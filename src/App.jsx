import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActoin";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  const openModal = (id) => {
    // detail flight numbers Id
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Map-View
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          List-View
        </button>
      </div>

      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
