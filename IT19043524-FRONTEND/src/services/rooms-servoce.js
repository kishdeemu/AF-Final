import axios from "axios";

class RoomsService {

    async getAllRooms(){
        try{
            const rooms = await axios.get("http://localhost:5000/rooms");
            return rooms;
        }catch(err){
            console.log(err);
        }
    }
}

export default new RoomsService();