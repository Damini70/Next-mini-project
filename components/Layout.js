import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import Head from 'next/head';

function Layout({children,title}) {
    return (
        <div>
              <Head>
        <title>{title}</title>
        
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
           <Header/>
           {children}
           <Footer/>  
        </div>
    );
}

export default Layout;