import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';

function Userid({user}) {
    console.log(user);
    return (
        <div>
          <Layout>
            <div className='container'>
                <h1>User Details Page</h1>
                <h1>{user.name}</h1>
            </div>
            </Layout>  
        </div>
    );
}

export default Userid;

export async function getServerSideProps(context){
   try{
    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
    return{
        props:{
            user: data
        }
    }
   } catch(error){
         console.log(error)
   }
}