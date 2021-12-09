import React from 'react';
  
  // import './GalleryImage.scss';
  
  const GalleryImage = (path) => {
    console.log(path.path)
    return (
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <img src={process.env.PUBLIC_URL+path.path}></img>
      </div>
    );
  };
  
  export default GalleryImage;
  