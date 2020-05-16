import React, {Components} from 'react';
import GalleryItem from './GalleryItem';
import NoImageFound from './NotFound';

const Gallery = props => {
  console.log(`props: ${props}`);
  let results = props.data;
  console.log(results);
  let photos;
  if(results.length > 0) {
      photos = results.map( photo => 
          <GalleryItem 
              url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
              key={photo.id}
          />
      );
  } else {
      photos = <NoImageFound />
  }
  return (
      <div className = 'photo-container'>
          <h2>Here are the results</h2>
          <ul>
              {photos}
          </ul>
      </div>
  )
}

export default Gallery;