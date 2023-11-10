import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
export const Store = createContext();
import "./lazyloader.css"

const url = "https://fignuscart-ly1x.onrender.com/data"




function DataStore(props) {
const [loading, setLoading] = useState(true);

  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data)
        setData(res.data);
        setLoading(false); 
      } catch (err) {
        console.log("error occured while fetching the data");
      }
      
    };
    getData();

  }, []);

  if (loading) {
    return <div className="loder_body">
      <img src='https://cdn.dribbble.com/users/1797086/screenshots/5615214/fish3.gif' class="loader"></img>
    </div>
  }

  return (
    <>
      {data && (
      <Store.Provider value={[data, setData]}>
        {props.children}
      </Store.Provider>)}

    </>
  )
}

export default DataStore
