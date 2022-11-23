import React from 'react';
import "./supplySection.scss";
import chart from "../../../../assets/images/chart.png";

const SupplySection = () => {
  return (
    <div className='supply_wrp'>
      <div className='container'>
        <div className='supply_values'>
        <p>Total Supply</p>
        <p className='supply_num'>100,000,000</p>
        </div>
        <img src= {chart}  alt='chart' />
      </div>

    </div>
  )
}

export default SupplySection;