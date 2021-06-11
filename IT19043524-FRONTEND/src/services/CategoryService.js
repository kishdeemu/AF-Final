import axios from "axios";

class CategoriesService {

    //Get all category details
    async getAllCategories(){
        try{
            const categories = await axios.get("http://localhost:5000/categories");
            return categories;
        }catch(err){
            console.log(err);
        }
    }

    //Add categories
    async addCategory(categoryDetails) { 
        try{
            await axios.post("http://localhost:5000/categories", categoryDetails);
            return true;
        }catch(err){
            console.log(err)
            return false;
        }
    }

    //Update categories by id
    async updateByID(id, catDetails){
        try{
            await axios.patch("http://localhost:5000/categories" + `/${id}`, catDetails);
            return true;
        }catch(err){
            console.log(err)
            return false;
        }
    }

    //Get categories by ID
    async getByID(id){
        let category;
        try{
            category = await axios.get("http://localhost:5000/categories" + `/${id}`);
            return category;
        }catch(err){
            console.log(err)
            return false;
        }
    }
}

export default new CategoriesService();