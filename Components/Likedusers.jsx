import React, { useState } from 'react'
import { useEffect } from 'react';
import Likedprofile from './Likedprofile';



const CardStyle = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  width: "200px",
  height: "300px"
};

const Users=(props)=>{
  const [users, setusers] =useState([]);
  const [like,setlike] = useState([]);
  const [items,setitems] = useState([])
  const [islike,setislike] = useState([]);


  useEffect(()=>{
  fetch("https://rickandmortyapi.com/api/character")
  .then((res)=> res.json())
  .then((users)=>{
    setusers(users.results);
  
  }
  );
},[]);





const likebtnhandler=(userindex)=>{
  const items =[...users];
  items[userindex]=!islike[userindex].isLike;
  setusers(items);
}

const btnhandler =(userindex,index)=>{

  const key={index}
    const item=[...users]
    item.splice(key,1)
    setusers(item)
    console.log(item);
}
    


const Likedprofiles =users.map((user, index)=>{
  return(
    <>
   
    <Likedprofile
    key={index}
    name={user.name}
    status={user.status}
    gender={user.gender}
    species={user.species}
    userimg={user.image}

    />
    
    
    <button onClick={btnhandler} >Dislike</button>











  </>


  )
})

  return <> {Likedprofiles}</>
    


};
export default Users;