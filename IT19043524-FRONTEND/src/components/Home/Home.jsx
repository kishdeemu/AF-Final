import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

//Imprting services
import CategoryService from "../../services/CategoryService";
import RoomsService from "../../services/RoomService";

const Home = (props) => {
  const [allRooms, setAllRooms] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  let history = useHistory();

  useEffect(() => {
    //Get all rooms details
    RoomsService.getAllRooms().then((res) => {
      setAllRooms(res.data.room);
    });
    CategoryService.getAllCategories().then((res) => {
      setAllCategories(res.data.category);
    });
  }, []);

  const addRoomHandler = (catID) => {
    props.passCatID(catID);
    history.push("/update-category");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Room Details</h2>
      <br />
      <div className="row">
        {allRooms.map((room) => {
          return (
            <div className="col-sm-4">
              <div className="card" style={{boxShadow: "5px 5px 5px grey"}}>
                <div className="card-body">
                  <h5 className="card-title">{room.code} - {room.wing}</h5>
                  <p className="card-text">
                  {room.pax}
                  </p>
                </div>
              </div>
              <br/>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <h2>Category Details</h2>
      <br />
      <div className="row">
        {allCategories.map((cat) => {
          return (
            <div className="col-sm-6">
              <div className="card" style={{boxShadow: "5px 5px 5px grey"}}>
                <div className="card-body">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text">
                  {cat.description}
                  </p>
                  {cat.rooms.map((cat) => {
                    console.log(cat);
                    return <p className="card-text">{cat.code} - Rs.{cat.amount}</p>;
                  })}
                  <button onClick={() => addRoomHandler(cat._id)} className="btn btn-primary">Add Rooms</button>
                </div>
              </div>
              <br/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
