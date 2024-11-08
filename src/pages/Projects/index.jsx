import { Container } from "./styles";

import { Header } from "../../components/Header"
import { ProjectCard } from "../../components/ProjectCard";
import { Footer } from "../../components/Footer";

import pompomImg from "../../assets/image-pompom.jpg";

const projects = [
  {
    "title": "Aria Discord Bot",
    "description": "Aria Futaba is a fictional character from the animated series Aikatsu Stars! She is the main theme for the bot!",
    "image": "https://camo.githubusercontent.com/c88ddae516a261b5ff3cca90d160730d7c282529605b9d70c5bb48ac4b238f88/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f61696b617473757374617273363836342f696d616765732f662f66302f415338323132322e706e672f7265766973696f6e2f6c61746573743f63623d3230313731313136313735303534",
    "link": "https://github.com/thiagokrugel/ariaDiscordBot"
  },
  {
    "title": "eu",
    "description": "literalmente eu",
    "image": pompomImg,
    "link": "https://github.com/thiagokrugel"
  }
]

export function Projects() {
  return (
    <Container>
      <Header />

      <h1>Projetos</h1>

      <div className="projects-wrapper">
        {
          projects.map(project => (
            <ProjectCard key={project.title} title={project.title} description={project.description} image={project.image} link={project.link}/>
          ))
        }
      </div>

      <Footer />

    </Container>
  );
}