import React from 'react';
import GalleryImage from '../atoms/GalleryImage'
  
  import '../styles/gallery.scss';
  
  const Gallery = () => {
    const gallery1 = [
      1, 2, 3,4,5,6,7,8,9,10,11,12
    ];
    const gallery2 = [
      1, 2, 3,4,5,6,7,8
    ];
    return (
      <div id="gallery" className="container_main container">
        {/* <div className="big_label row d-flex d-md-none">
          <h1>Kontakt</h1>
        </div> */}
        {/* <div className="w-100 py-1 fw-bold mb-3 d-flex d-md-none">
          <h2 className="border-bottom pb-2">Galeria</h2>
        </div> */}
        <div className="d-flex w-100 row gallery_wrapper">
          <span className="d-flex w-100 py-1 fw-bold mb-3 justify-content-center">
            <h2 className="pb-2 text-uppercase">
              Inwestycje zrealizowane
            </h2>
          </span>
            {gallery1.map(function(index){
              return <GalleryImage path={ '/images/gallery/done/'+index+'.jpg' }/>;
            })}
        </div>
        <div className="d-flex w-100 row gallery_wrapper">
          <span className="d-flex w-100 py-1 fw-bold mb-3 justify-content-center">
            <h2 className="pb-2 text-uppercase">
              Inwestycje w realizacji
            </h2>
          </span>
          {gallery2.map(function(index){
              return <GalleryImage path={ '/images/gallery/in_progress/'+index+'.jpg' }/>;
            })}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  