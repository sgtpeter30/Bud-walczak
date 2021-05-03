import logo from "../icons/logo.svg";

const Menu_welcome = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center position-absolute top-50 start-50 translate-middle bg-main-light-gray-opacity-90 p-5 rounded-3 w-75 w-lg-auto">
      <img src={logo} alt="bud-walczak_logo" />
      <div className="d-flex flex-wrap w-100 justify-content-center mt-4">
        <a href="/about-us" className="btn btn-primary d-flex w-75 mb-4 justify-content-center">O firmie</a>
        <a href="/contact" className="btn btn-primary d-flex w-75 justify-content-center">Kontakt</a>
      </div>
    </div>
  );
};

export default Menu_welcome;