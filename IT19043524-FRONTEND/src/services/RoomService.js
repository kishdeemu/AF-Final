import axios from "axios";

class RoomsService {

    //Get all rooms details by sending GET request
    async getAllRooms(){
        try{
            const rooms = await axios.get("http://localhost:5000/rooms");
            return rooms;
        }catch(err){
            console.log(err);
        }
    }

    //Add room details by sending POST request
    async addRoom(roomDetails) { 
        try{
            await axios.post("http://localhost:5000/rooms", roomDetails);
            return true;
        }catch(err){
            console.log(err)
            return false;
        }
    }
}

export default new RoomsService();