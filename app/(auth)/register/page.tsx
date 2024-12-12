import React from 'react'




type User ={
  id:number;
  name:string;
  username: string;
  email: string;
};


const page = async() => {

  const data = await fetch("https://jsonplaceholder.typicode.com/users",{
    next:{revalidate:3600},
  });


  const values:User[] = await data.json();
  console.log("Values are ",values)
  return (

<main>
  <h1>Blog Posts</h1>
  <ul>
    {values.map((value)=>(
      <li key = {value.id}>{value.name}</li>
    ))}
  </ul>
</main>
  )
}

export default page
