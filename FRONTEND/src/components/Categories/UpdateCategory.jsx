import React, { useEffect, useState } from "react";
import Select from "react-select";

//Importing service files from 'services' folder
import CategoriesService from "../../services/CategoryService";
import RoomsService from "../../services/RoomService";

const UpdateCategory = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredRooms, setEnteredRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  let rms = [];

  useEffect(() => {
    //Get category data by ID
    CategoriesService.getByID(props.getCategoryID).then((res) => {
      setEnteredName(res.data.category.name);
      setEnteredDescription(res.data.category.description);
    });
    //Get all room data
    RoomsService.getAllRooms().then((res) => {
      res.data.room.map((data) => {
        rms.push({ value: data._id, label: data.code });
      });
    });
    setRooms(rms);
  }, []);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };
  const roomChangeHandler = (e) => {
    setEnteredRooms(e);
  };

  //Executes this functions when the form is submitted
  const formHandler = (e) => {
    e.preventDefault();
    const categoryData = {
      name: enteredName,
      description: enteredDescription,
      rooms: enteredRooms.map((rm) => {
        return rm.value;
      }),
    };
    //Update categories by ID
    CategoriesService.updateByID(props.getCategoryID, categoryData).then(
      (res) => {
        if (res) {
          alert("Data updated successfully");
        } else {
          alert("Failed to save data!!!");
        }
      }
    );
  };

  return (
    <div
      className="container"
      style={{ padding: "30px", lineHeight: "2.5rem", width: "50%" }}
    >
      <h2>Update Category</h2>
      <form onSubmit={formHandler}>
        <div className="form-group">
          <label htmlFor="exampleFormControlName">Name</label>
          <input
            type="text"
            className="form-control"
            value={enteredName}
            id="exampleFormControlName"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlDescription">Description</label>
          <textarea
            className="form-control"
            value={enteredDescription}
            id="exampleFormControlDescription"
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Categories</label>
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

export default UpdateCategory;
