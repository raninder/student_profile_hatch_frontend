import React, { useState,useEffect } from "react";
import axios from "axios";
// import { useAlert } from 'react-alert';
// import "../styles/DispGoods.css";
// import { useHistory } from 'react-router-dom';

export default function Student(props) {
  const { id,pic,firstName, lastName, email,company, skill, grades} = props;
	let sum=0;
	for(let i=0;i<grades.length;i++){
	console.log("grades-i",grades[i]);
	sum+=Number(grades[i]);
	}
	console.log("sum",sum);
	const average = sum / grades.length;
	console.log("avg",average);
	// console.log("grades",grades[0]);
	// const average = grades.reduce((a,b) => a + b, 0) / grades.length;
	
  return (
    
  <div >
					<img src = {pic} /> <br/>
					<h3>{firstName} {lastName}</h3><br/>
					Email: {email} <br/>
					Company: {company} <br/>
					Skill: {skill} <br/>
					Average: {average}%
					{/* <button className="btn btn-primary"onClick={() => add_to_request(id) }>Request</button>  */}
				
	</div>

  );
}
