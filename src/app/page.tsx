import Image from "next/image";
import styles from "./page.module.sass";
import Header from "@/components/layout/Header/Header";
import ProjectsSection from '../components/layout/projectsSection/projectsSection'
import SkillsSection from "@/components/layout/skillsSection/skillsSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
);
}
