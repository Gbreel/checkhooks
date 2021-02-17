import React,{useState} from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating= ({filterRating,movieRating,setRating,rating}) => {
  
  
  
  const handleChange = value => {
    setRating(value );
  };

    return (
      <div>
       {filterRating?
      <span>
        <Rate  tooltips={desc} onChange={handleChange} value={rating} />
        
      </span>:

        <span>
       <Rate disabled value={movieRating} />
       
        </span>
          }
     </div>
      
    );
  
}

export default Rating