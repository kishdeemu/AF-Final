import React from 'react';
import { useHistory } from 'react-router';

const Categories = () => {
    let history = useHistory();

    const gotoAddCategory = () => {
        history.push("/add-category");
    }

    return ( 
        <div style={{ padding: "30px" }}>
            <button className="btn btn-primary" onClick={gotoAddCategory}>Add Category</button>
        </div>
     );
}
 
export default Categories;