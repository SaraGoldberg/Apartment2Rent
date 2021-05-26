
import React from 'react';

export const login=()=>{
    fetch(`http://localhost:3001/login?user=user1`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("error", err);
    });
 }