import Hero from "../Header/Hero";
import { useTranslation } from "react-i18next";
import Divider from "../Concept/Divider";

const Home = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation("global");

  return (
    <div>
      <Hero
        img={"https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/jardim.jpg"}
        alt={"jardim"}
      />

      <Divider dividerHead={t("home.title")} dividerDesc={t("home.desc")} />

      <div className="grid md:grid-cols-5 bg-sky-700 py-10">
        <div className="col-span-4 justify-center md:px-6">
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-1.5">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/fachada.jpg"
              alt="pousadafrente"
            />
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/terraco.jpg"
              alt="pousadaterraco"
            />
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/suites/varanda.jpg"
              alt="pousadavaranda"
            />

            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/achurrasqueira.jpg"
              alt="pousadachurrasqueira"
            />
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/acozinha.jpg"
              alt="pousadacozinha"
            />
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/acom/casa/acozinha.jpg"
              alt="pousadacozinha"
            />
          </div>
        </div>
        <div className="flex items-center leading-snug text-white">
          <div className="text-justify md:text-left px-8 md:px-0 md:pe-8 mt-4 md:mb-0">
            <h1 className="text-xl uppercase mb-3 text-center md:text-left">
              {t("pousada.title")}
            </h1>
            <p className="text-[14px]">{t("home.viladesc")}</p>
          </div>
        </div>
      </div>
      <Divider dividerHead={t("home.title2")} dividerDesc={t("home.desc2")} />
      <div>
        <img
          src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/jeri.jpg"
          alt="jeripraia"
          className="h-[70vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
