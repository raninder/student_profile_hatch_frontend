import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from './Student';

export default function Fetch() {
	const [data, setData] = useState([]);
  const url = "https://api.hatchways.io/assessment/students";
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log("data1",response.data.students);
      setData(response.data.students);
      // setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error: ' + error);
      })
  }, []);
	console.log("data2",data);

	
	return(
		<>
		
		{data.map((item) => (
        <Student key={item.id} {...item} />
      ))}
		</>
	)
}