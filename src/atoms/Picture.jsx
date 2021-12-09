import Blazy from "blazy";
import spinner from "../icons/spinner_1.svg";
import { useEffect } from "react";

const Picture = ({image, text, classPicture}) => {
  const bLazy = new Blazy();
  useEffect(() => {
    let checkExistPicture = setInterval(function() {
      if(document.querySelector('.b-lazy') != undefined) {
        bLazy.revalidate();
        clearInterval(checkExistPicture);
      }
    }, 100);
    return () => {
      bLazy.revalidate();
    }
  });
  return (
    <picture className={classPicture}>
      {/* <source media="(min-width:979px)" data-srcset={spinner}/> */}
      <source media="(min-width:979px)" data-srcset={process.env.PUBLIC_URL+'/images'+image.path+'/'+image.name+'_big.'+image.extension }/>
      <source media="(min-width:757px)" data-srcset={process.env.PUBLIC_URL+'/images'+image.path+'/'+image.name+'_medium.'+image.extension }/>
      <img src={spinner} alt={text} className="b-lazy img-fluid" data-src={process.env.PUBLIC_URL+'/images'+image.path+'/'+image.name+'_small.'+image.extension} />
    </picture>
  );
};

export default Picture;
