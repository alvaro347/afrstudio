import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.scss";

function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={assetPath("images/heroImg.png")} alt="" />
      </div>
      <div className="hero-inner">
        <h1 className="hero-title">
          <span className="hero-title-bold">AFR STUDIO</span>
          <span className="hero-title-outline">DEV.</span>
          <span className="hero-title-bold"> & DESIGN.</span>
        </h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <div className="hero-actions">
          <Button variant="primary" onClick={scrollToProjects}>{t("hero.cta")}</Button>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

export default Hero;
