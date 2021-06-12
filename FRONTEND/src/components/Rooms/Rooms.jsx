import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import Select from "react-select";
//Service files imports
import RoomsService from "../../services/RoomService";
import CalculationService from '../../services/CalculationService';

const Rooms = () => {
    let tempRooms = [];
    const [rooms, setRooms] = useState([]);
    const [enteredRooms, setEnteredRooms] = useState([]);
    const [total, setTotal] = useState(0);
    let history = useHistory(); //useHistory used for navigation to links

    //Code inside useEffect runs everytime when the component is loaded
    useEffect(()=> {
        RoomsService.getAllRooms().then(res=> {
            res.data.room.map(data => {
                tempRooms.push({"value": data._id, "label": data.code, "amount": data.amount});
            })
        })
        setRooms(tempRooms);
    },[]);
    
    const gotoAddRoom = () => {
        history.push("/add-room");
    }
    const roomChangeHandler = (e) => {
        setEnteredRooms(e);
    }
    const calculateTotalHandler = () => {
        CalculationService.calculateTotal(enteredRooms).then(res => {
            setTotal(res);
        });
    }

    return ( 
        <div style={{ padding: "30px" }}>
            <button className="btn btn-primary" onClick={gotoAddRoom}>Add Room</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <Select
            isMulti
            name="rooms"
            options={rooms}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={roomChangeHandler}
         />
         <br/>
         <button className="btn btn-secondary" onClick={calculateTotalHandler}>Calculate Total</button>
         <br/>
         <br/>
         <h5>Total = {total}</h5>
        </div>
     );
}
 
export default Rooms;