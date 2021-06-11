import axios from "axios";

class CalculationService {

    async calculateTotal(roomData) { 
        let total;
        try{
            total = await axios.post("http://localhost:5000/calculations", roomData);
            return total.data.total;
        }catch(err){
            console.log(err)
            return false;
        }
    }

}

export default new CalculationService();