import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  /*  const [currentLanguage, setCurrentLanguage] = useState(language); */

  /* const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    console.log("change language");
  };
 */

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  /* 
  const handleClick = () => {
    handleChangeLanguage();
    handleText();
  }; */

  const [buttonText, setButtonText] = useState("EN");

  /*   function handleText() {
    setButtonText();
  } */

  return (
    <div className="fixed top-0 z-20 w-full flex sm:min-h-[80px] md:min-h-[85px] items-center justify-around text-cyan-800 bg-white/[0.80] text-base">
      <div className="text-center sm:-ml-3 lg:ml-0">
        <Link to="/" className="font-calligra text-3xl">
          Vila Marinella
        </Link>

        <div className="text-xs">Jericoacoara - Ceará - Brasil</div>
      </div>
      <div>
        <div>
          <ul className="hidden md:flex px-4 text-center">
            <li className="lg:px-8 md:px-3">
              <NavLink to="/apousada" className="hover:underline">
                {t("nav.house")}
              </NavLink>
            </li>
            <li className="lg:px-8 md:px-3">
              <NavLink to="/acomodacoes" className="hover:underline">
                {t("nav.accommodation")}
              </NavLink>
            </li>
            <li className="lg:px-8 md:px-3">
              <NavLink to="/avila" className="hover:underline">
                {t("nav.village")}
              </NavLink>
            </li>
            <li className="lg:px-8 md:px-3">
              <Link
                to={"https://www.booking.com/hotel/br/villa-marinella"}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.reservation")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleClick("en");
                }}
                className="px-2 hover:underline"
              >
                EN
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleClick("pt");
                }}
                className="px-2 hover:underline"
              >
                PT
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="md:hidden z-10">
        <GiHamburgerMenu className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 h-screen w-3/4 bg-sky-700/90 px-6 py-8 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-lg py-6">
            <NavLink to="/apousada">{t("nav.house")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/acomodacoes">{t("nav.accommodation")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/avila">{t("nav.village")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/reservas">{t("nav.reservation")}</NavLink>
          </li>
          <li>
            <button onClick={() => handleClick("en")} className="py-6">
              EN
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("pt")} className="">
              PT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
