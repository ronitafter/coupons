import React from 'react';
import ItemCard from './ItemCard';
import Data from './Data';

const Home =() => {
   // console.warn(Data.ProductData);
  return (
      //  <div><h1>Home</h1></div>
      <>
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='py-4 container'>
      <div className='row justify-content-center'>
      {Data.ProductData.map((item, index)=>{
         return(
      <ItemCard 
      img={item.img} 
      title={item.title} 
      desc={item.desc} 
      price={item.price} 
      item={item} 
      key={index}
      />

         )
      })}
      </div>
      
      </section>
      </>
  );
};

export default Home;
