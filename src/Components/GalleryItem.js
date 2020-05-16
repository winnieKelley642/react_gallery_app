import React from 'react';

const GalleryItem = props => {
  return(
    <li className = 'photo-container'>
      <img 
        src={props.url}
        alt=""/>
    </li>
  )
}

export default GalleryItem;