"use strict";

import { User } from "./user.js";
import { users } from "./data";



const getDashboardInformation = () => {
    getProfil().then((res) => {
   
    })
    .catch((err) => {
      console.error(`${err.message}`);
    })
  };

  getDashboardInformation();

const getProfil = (res) => {
    fetch(`https://randomuser.me/api/?results=20`)
    .then((res) => {
      if (res.status === 404){
      throw new Error("Ressource not found");
      }
    console.log(res);
    return res.json();
    })
    .then ((data) =>{
        console.log(data);
        parseStationData(data);
    })
    .catch((err) => {
      console.error(`${err.message}`);
    })

    const anna  = new User("Anna","18", "Yverdon")
};