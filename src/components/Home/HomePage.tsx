import {useEffect, useState} from "react";
import { ICategoryItem } from "./types";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {

  const[list, setList] = useState<ICategoryItem[]>([]);
 
    useEffect(() =>{
      axios.get<ICategoryItem[]>("http://127.0.0.1:8000/api/category")
      .then(resp =>{
        console.log("axios result", resp);
        setList(resp.data);
      })
      .catch(bad =>{
        console.log("Bad  request", bad);
      });
    }, []);
    
  

  const dataView = list.map((category) =>(
<tr key={category.id}>
              <th>
                <img src={category.image} alt="img" width={75}/>
              </th>
              <td>{category.name}</td>
              <td>{category.description}</td>

            </tr>
  ));

    return (
      <>
        <h1 className="text-center">Списко категорій</h1>
        <Link className="btn btn-success" to="/category/create">add category</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>

              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            
           {dataView}
          </tbody>
        </table>
      </>
    );
  };
  
  export default HomePage;