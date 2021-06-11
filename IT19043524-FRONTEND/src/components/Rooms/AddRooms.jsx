import React, { useEffect, useState } from "react";

import Select from 'react-select';
import CategoriesService from "../../services/CategoryService";
import RoomsService from "../../services/RoomService";

const AddRoom = () => {
    const [enteredCode, setEnteredCode] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredWing, setEnteredWing] = useState("");
    const [enteredPax, setEnteredPax] = useState(0);
    const [enteredCategories, setEnteredCategories] = useState([]);

    const [categories, setCategories] = useState([]);
    let cats = [];
    useEffect(()=> {
        CategoriesService.getAllCategories().then(res=> {
            res.data.category.map(data => {
                console.log(data)
                cats.push({"value": data._id, "label": data.name});
            })
        })
        setCategories(cats);
    },[]);

    const codeChangeHandler = (e) => {
        setEnteredCode(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const wingChangeHandler = (e) => {
        setEnteredWing(e.target.value);
    }
    const paxChangeHandler = (e) => {
        setEnteredPax(e.target.value);
    }
    const categoryChangeHandler = (e) => {
        setEnteredCategories(e);
    }

    const formHandler = (e) => {
        e.preventDefault();
        const roomData = {
            code: enteredCode,
            amount: enteredAmount,
            wing: enteredWing,
            pax: enteredPax,
            categories: enteredCategories.map(cat => {
                return cat.value
            })
        }
        RoomsService.addRoom(roomData).then(res => {
            if(res){
                alert("Data saved successfully");
            }else{
                alert("Failed to save data!!!");
            }
        });
        console.log(roomData);
    }

  return (
    <div className="container" style={{ padding: "30px", lineHeight: "2.5rem", width: "50%"}}>
        <h2>Add New Room</h2>
      <form onSubmit={formHandler}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Code</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={codeChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlAmount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlAmount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlWing">Wing</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlWing"
            onChange={wingChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlPax">Pax</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlPax"
            onChange={paxChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Categories</label>
         <Select
            isMulti
            name="categories"
            options={categories}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={categoryChangeHandler}
         />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
};

export default AddRoom;
