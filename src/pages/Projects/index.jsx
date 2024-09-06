import { Container } from "./styles";

import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { Footer } from "../../components/Footer";

export function Projects() {
  return (
    <Container>
      <Header />

      <h1>Projetos</h1>

      <div className="projects-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <Footer />

    </Container>
  );
}