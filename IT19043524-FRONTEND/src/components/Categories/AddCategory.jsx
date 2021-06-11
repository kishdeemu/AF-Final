import React, { useEffect, useState } from "react";
import Select from "react-select";

//Importing service files from 'services' folder
import CategoriesService from "../../services/CategoryService";
import RoomsService from "../../services/RoomService";

const AddCategory = () => {
  const [enteredName, setEnteredName] = useState(""); //Store name
  const [enteredDescription, setEnteredDescription] = useState(""); //Store description
  const [rooms, setRooms] = useState([]); //Store all rooms
  const [enteredRooms, setEnteredRooms] = useState([]); //Store selected rooms
  let rms = []; //Temporarily store room data

  //code inside 'useEffect' runs automatically when this component is renderd.
  useEffect(() => {
    RoomsService.getAllRooms().then((res) => {
      res.data.room.map((data) => {
        console.log(data);
        rms.push({ value: data._id, label: data.code });
      });
    });
    setRooms(rms);
  }, []);

  //Below methods will store form data into above state variables.
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };
  const roomChangeHandler = (e) => {
    setEnteredRooms(e);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const categoryData = {
      name: enteredName,
      description: enteredDescription,
      rooms: enteredRooms.map((rm) => {
        return rm.value;
      }),
    };
    //Calls 'addCategory' method inside 'CategoryService.js' to pass data to backend
    CategoriesService.addCategory(categoryData).then((res) => {
      if (res) {
        alert("Data saved successfully");
      } else {
        alert("Failed to save data!!!");
      }
    });
  };

  return (
    <div
      className="container"
      style={{ padding: "30px", lineHeight: "2.5rem", width: "50%" }}
    >
      <h2>Add New Category</h2>
      <form onSubmit={formHandler}>
        <div className="form-group">
          <label htmlFor="exampleFormControlName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlName"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlDescription">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlDescription"
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Rooms</label>
          <Select
            isMulti
            name="rooms"
            options={rooms}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={roomChangeHandler}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
