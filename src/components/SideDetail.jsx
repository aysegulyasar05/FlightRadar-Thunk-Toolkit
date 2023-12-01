import axios from "axios";
import { useEffect, useState } from "react";
import { detailOptions } from "../helpers/constants";

const SideDetail = ({ setShowDetail, detailId }) => {
  const [d, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => {
        setDetail(res.data);
      });
  }, [detailId]);

  console.log(d);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!d ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>Registration No: {d.aircraft.registration}</p>
            <img src={d.aircraft.images.large[0].src} />
            <p>{d.airline.name} </p>
            <p>
              <span>Origin:</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={d.airport.origin?.website}
              >
                {d.airport.origin.name}
              </a>
            </p>
            <p>
              <span>Destination:</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={d.airport.destination?.website}
              >
                {d.airport.destination.name}
              </a>
            </p>
            <p>
              <span>Status</span>
              <span className="status" style={{ background: d.status.icon }}>
                {d.status?.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
