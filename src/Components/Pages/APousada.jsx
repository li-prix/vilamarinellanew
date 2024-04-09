import { useTranslation } from "react-i18next";
import Divider from "../Concept/Divider";
import Hero from "../Header/Hero";

const Apousada = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation("global");

  return (
    <div>
      <Hero
        img={"https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/sala.jpg"}
        alt={"sala"}
      />
      <div>
        <Divider
          dividerHead={t("pousada.title")}
          dividerDesc={t("pousada.desc")}
        />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-1.5 md:px-14 md:py-10 bg-sky-700">
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/fachada.jpg"
          alt="fachada"
        />
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/jardim.jpg"
          alt="jardim"
        />
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/terraco.jpg"
          alt="terraco"
        />
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/salatv.jpg"
          alt="salatv"
        />
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/suite.jpg"
          alt="suite"
        />
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/sala.jpg"
          alt="sala"
        />
      </div>

      <div className="flex md:p-12 justify-center w-full h-full">
        <video
          className="w-full my-20 lg:h-dvh"
          src="/video.mp4#t=0.001"
          controls
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};

export default Apousada;
