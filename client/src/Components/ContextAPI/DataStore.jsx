import React, { createContext, useState, useEffect } from 'react'

import axios from "axios";
export const Store = createContext();
const url = "https://fignuscart-ly1x.onrender.com/data"



function DataStore(props) {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data)
        setData(res.data);
      } catch (err) {
        console.log("error occured");
      }
    };
    getData();

  }, []);

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
