import React,{useState,useEffect} from 'react';
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
function Index(props) {
    const [data,setData]=useState([]);
    const router=useRouter();
    
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(json => setData(json));
   },[])
    // console.log(data);
    return (
        <div>
            <Layout>
            <h1>All users details</h1> 

            <table className="table">
 <thead>

    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>{
      return  <tr key={item.id}><td onClick={()=>{router.push(`/users/${item.id}`)}}>{item.name}</td></tr>
     })}
  </tbody>
</table>
            </Layout>
           
        </div>
    );
}

export default Index;

