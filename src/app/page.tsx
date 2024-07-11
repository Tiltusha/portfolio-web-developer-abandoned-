import Image from "next/image";
import styles from "./page.module.sass";
import Header from "@/components/layout/Header/Header";
import ProjectsSection from '../components/layout/projectsSection/projectsSection'
import SkillsSection from "@/components/layout/skillsSection/skillsSection";
import AboutSection from "@/components/layout/aboutSection/aboutSection";
import ContactSection from "@/components/layout/contactSection/contactSection";
import Footer from "@/components/layout/footer/Footer";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <hr className={styles.hr} />
      <Footer />
    </div>
  );
};

export default Home;

