import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import projectsData from "../../data/projects.json";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import SkillCard from "../../components/SkillCard/SkillCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "./MainPage.scss";

function MainPage() {
  const { t } = useTranslation();

  const skills = [
    {
      number: "01",
      title: t("skills.dev.title"),
      description: t("skills.dev.description"),
      visual: "code",
      href: "https://github.com/alvaro347",
    },
    {
      number: "02",
      title: t("skills.design.title"),
      description: t("skills.design.description"),
      visual: "design",
      href: "https://www.artstation.com/alvaro347",
    },
    {
      number: "03",
      title: t("skills.3d.title"),
      description: t("skills.3d.description"),
      visual: "3d",
      href: "https://www.artstation.com/alvaro347",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <Section id="featured" label={t("sections.featured.label")} title={t("sections.featured.title")}>
          {projectsData.featured.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </Section>

        <Section id="projects" label={t("sections.projects.label")} title={t("sections.projects.title")}>
          <ProjectGrid projects={projectsData.small} />
        </Section>

        <Section id="skills" label={t("sections.skills.label")} title={t("sections.skills.title")}>
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.number} {...skill} />
            ))}
          </div>
        </Section>

        <Section id="about" label={t("sections.about.label")} title={t("sections.about.title")}>
          <div className="about-layout">
            <div className="about-text">
              <p>{t("sections.about.bio1")}</p>
              <p>{t("sections.about.bio2")}</p>
              <div className="about-meta">
                <span>{t("sections.about.location")}</span>
                <span className="about-divider" />
                <span className="accent">{t("sections.about.availability")}</span>
              </div>
            </div>
            <div className="about-image">
              <img src={assetPath("images/profile.jpg")} alt="Alvaro" />
            </div>
          </div>
        </Section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <span className="contact-label mono">{t("footer.contactLabel")}</span>
            <h3 className="contact-heading">{t("footer.contact")}</h3>
            <p className="contact-text">{t("footer.ctaText")}</p>
            <Button href="mailto:alvarofrdesign@gmail.com" variant="primary">
              {t("footer.email")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
