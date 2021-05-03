import Picture from "../atoms/Picture";
import '../styles/main_banner.scss';

const Main_banner = () => {
  const banner_1 = {
    title: 'Wypożyczenie sprzętu',
    link: '/equipment',
    image: {
      path:"/banners/main_page/banner_1",
      name:"image_1", 
      extension:"jpg"
    }
  };
  const banner_2 = {
    title: 'Usługi budowlane',
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
        <div className="d-flex vh-50 vh-lg-100 vw-100 position-relative position-lg-absolute">
          <a target="_self" href={banner_1.link} title={banner_1.title} className="banner_1 d-flex">
            <div className="position-absolute w-100 d-flex px-5 py-2 py-lg-5 mt-5 bg-opacity-secondary-75">
              <h2 className="text-white">{banner_1.title}</h2>
            </div>
            <Picture image={banner_1.image} text={banner_1.title} classPicture="d-flex justify-content-start opacity-75"/>
          </a>
        </div>
        {/* obraz 2 */}
        <div className="d-flex vh-50 vh-lg-100 vw-100 position-relative position-lg-absolute justify-content-end">
          <a target="_self" href={banner_2.link} title={banner_2.title} className="banner_2 d-flex justify-content-end">
            <div className="position-absolute w-100 px-5 py-2 py-lg-5 bottom-0 mb-5 d-flex bg-opacity-primary-75 justify-content-end">
              <h2 className="text-white">{banner_2.title}</h2>
            </div>
            <Picture image={banner_2.image} text={banner_2.title} classPicture="d-flex justify-content-end opacity-75"/>
          </a>
        </div>
      </div>
    
  );
};

export default Main_banner;