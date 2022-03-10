import React from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";

import './main.css';

const Main = () => {
  return (
    <div className='aimouse__main section__padding' id='home'>
      <div className="aimouse__main-home">
        <h1>AI Mouse 2nd 2.4G Wireless Mouse</h1>
        <button type='button'>Buy Now <AiOutlineShoppingCart /></button>
      </div>
    </div>
  );
};

export default Main;
