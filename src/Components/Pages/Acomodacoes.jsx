import { useTranslation } from "react-i18next";
import Divider from "../Concept/Divider";
import Hero from "../Header/Hero";
import Carousel from "../Concept/Carousel";
import { FaWifi } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";

const Acomodacoes = () => {
  const { t } = useTranslation("global");

  const slides = [
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/sala.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/acozinha.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/asuite.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/aquarto.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/abanheiro.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/achurrasqueira.jpg",
  ];

  let slides1 = [
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/quarto.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/varanda.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/tv.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/cama.jpg",
    "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/porta.jpg",
  ];

  return (
    <div>
      <Hero
        img={"https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/suite.jpg"}
        alt={"suite"}
      />
      <Divider dividerHead={t("acom.title")} dividerDesc={t("acom.desc")} />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-sky-700 md:p-12">
        <div className="col-span-2">
          <Carousel slides={slides} />
        </div>
        <div className="flex flex-wrap content-center">
          <div className="text-justify text-white mb-4 px-2 mt-4 ms-4">
            <h1 className="text-2xl mb-3">{t("acom.title2")}</h1>
            <p>{t("acom.desc2")}</p>
            <div className="flex items-center">
              <FaPeopleRoof />
              <span className="m-2">{t("acom.people")}</span>
              <FaWifi className="mx-2" />
              <span>WiFi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-white md:order-last mb-3 md:p-12">
        <div className="col-span-2 md:order-last">
          <Carousel slides={slides1} />
        </div>
        <div className="flex flex-wrap content-center">
          <div className="text-justify text-cyan-800 font-medium px-2 mt-4 me-4">
            <h1 className="text-2xl mb-3">{t("acom.title3")}</h1>
            <p className="">{t("acom.desc3")}</p>
            <div className="flex items-center">
              <FaPeopleRoof />
              <span className="m-2">{t("acom.people1")}</span>
              <FaWifi className="mx-2" />
              <span>WiFi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acomodacoes;
