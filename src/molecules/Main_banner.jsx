import Picture from "../atoms/Picture";
import { Link } from 'react-router-dom';
import '../styles/main_banner.scss';

const Main_banner = () => {
  const banner_1 = {
    title: 'Wypożyczenia',
    link: '/equipment',
    image: {
      path:"/banners/main_page/banner_1",
      name:"image_1", 
      extension:"jpg"
    }
  };
  const banner_2 = {
    title: 'Budowa domów',
    link: '/houses',
    image: {
      path:"/banners/main_page/banner_1",
      name:"image_2", 
      extension:"jpg"
    }
  }
  return (
    
      <div id="main_banner" className="vw-100 vh-100 d-flex flex-wrap align-items-center position-relative">
        {/* obraz 1 */}
        <div className="main_banner_wrapper d-flex vh-50 vh-lg-100 vw-100 vw-lg-50 position-relative">
          <Link target="_self" to={banner_1.link} title={banner_1.title} className="banner_1 d-flex justify-content-center w-100">
            <div className="main_banner_title position-absolute w-100 px-5 py-2 d-flex bg-opacity-primary-75 justify-content-start">
              <h2 className="text-white">{banner_1.title}</h2>
            </div>
            <Picture image={banner_1.image} text={banner_1.title} classPicture="d-flex justify-content-center"/>
          </Link>
        </div>
        {/* obraz 2 */}
        <div className="main_banner_wrapper d-flex vh-50 vh-lg-100 vw-100 vw-lg-50 position-relative">
          <Link target="_self" to={banner_2.link} title={banner_2.title} className="banner_2 d-flex justify-content-center w-100">
            <div className="main_banner_title position-absolute w-100 px-5 py-2 d-flex bg-opacity-primary-75 justify-content-end">
              <h2 className="text-white">{banner_2.title}</h2>
            </div>
            <Picture image={banner_2.image} text={banner_2.title} classPicture="d-flex"/>
          </Link>
        </div>
      </div>
    
  );
};

export default Main_banner;