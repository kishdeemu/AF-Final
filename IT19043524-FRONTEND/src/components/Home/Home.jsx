import React, { useEffect, useState } from "react";

import RoomsService from "../../services/rooms-servoce";

const Home = () => {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    RoomsService.getAllRooms().then((res) => {
        setAllRooms(res.data.room);
    });
  }, []);

  return (
    <div style={{padding: "30px"}}>
        <h2>Room Details</h2>
        <br/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Code</th>
            <th scope="col">Amount</th>
            <th scope="col">Wing</th>
            <th scope="col">Pax</th>
          </tr>
        </thead>
        <tbody>
          {allRooms.map((room) => {
           return <tr>
              <th scope="row">1</th>
              <td>{room.code}</td>
              <td>{room.amount}</td>
              <td>{room.wing}</td>
              <td>{room.pax}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
