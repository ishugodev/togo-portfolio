import { ArrowRight, Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

import React, { useEffect, useRef, useState } from "react"

import { Container, Intro, PinnedProjects, Contacts } from "./styles"

import { Header } from "../../components/Header"
import { ProjectCard } from "../../components/ProjectCard"
import { IconCard } from "../../components/IconCard"
import { Footer } from "../../components/Footer"

import node from "../../assets/icon_node.svg"
import powerBi from "../../assets/icon_powerBi.svg"
import python from "../../assets/icon_python.svg"
import sqlServer from "../../assets/icon_sqlServer.svg"
import { useNavigate } from "react-router-dom"

const pinnedProjects = [
  {
    "title": "Aria Discord Bot",
    "description": "Aria Futaba is a fictional character from the animated series Aikatsu Stars! She is the main theme for the bot!",
    "image": "https://camo.githubusercontent.com/c88ddae516a261b5ff3cca90d160730d7c282529605b9d70c5bb48ac4b238f88/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f61696b617473757374617273363836342f696d616765732f662f66302f415338323132322e706e672f7265766973696f6e2f6c61746573743f63623d3230313731313136313735303534",
    "link": "https://github.com/thiagokrugel"
  }
]

export function Home() {
  const navigate = useNavigate();

  function handleContactButton() {
    navigate('/contact');
  }

  function handleAllProjects() {
    navigate('/projects');
  }

  const useIntersectionObserver = (ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return isVisible;
  };

  const IntroSection = ({ children }) => {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref);
    const className = isVisible ? 'animate' : '';
    
    return (
      <Intro className={className} id="intro" ref={ref}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.className === "stacks-wrapper") {
            const combinedClassName = `${child.props.className} ${className}`;
            return React.cloneElement(child, { className: combinedClassName });
          }
          return child;
        })}
      </Intro>
    );
  };
  
  const PinnedProjectsSection = ({ children }) => {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref);

    return (
      <PinnedProjects className={isVisible ? 'animate' : ''} id="pinned-projects" ref={ref}>
        {children}
      </PinnedProjects>
    );
  };
  
  const ContactsSection = ({children}) => {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref);
    const className = isVisible ? 'animate' : '';

    return (
      <Contacts className={isVisible ? 'animate' : ''} id="contacts" ref={ref}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.className === "contact-wrapper") {
            const combinedClassName = `${child.props.className} ${className}`;
            return React.cloneElement(child, { className: combinedClassName });
          }
          return child;
        })}
      </Contacts>
    );
  };
  
  
  return (
    <Container>
      <Header />

      <IntroSection>
        <h1>Oi! Eu sou Thiago Krügel</h1>

        <h2>Cientista, Analista de dados, Desenvolvedor Back-end</h2>

        <p>
        Profissional em crescimento nas áreas de ciência de dados, análise de dados e desenvolvimento back-end, aplicando e aprimorando habilidades enquanto busca entregar soluções e insights relevantes.
        </p>

        <div className="stacks-wrapper">
          <IconCard title="Power BI" section="stacks">
            <img src={powerBi} />
          </IconCard>
          <IconCard title="SQL Server" section="stacks">
            <img src={sqlServer} />
          </IconCard>
          <IconCard title="Python" section="stacks">
            <img src={python} />
          </IconCard>
          <IconCard title="Node.js" section="stacks">
            <img src={node} />
          </IconCard>
        </div>

        <button className="contact" onClick={handleContactButton}>
          Entrar em contato
        </button>
      </IntroSection>

      <PinnedProjectsSection>
        <h3>Projetos em destaque</h3>

        <div className="projects-wrapper">
          {
            pinnedProjects.map(project => (
              <ProjectCard key={project.title} title={project.title} description={project.description} image={project.image} link={project.link}/>
            ))
          }
        </div>

        <a className="see-all" onClick={handleAllProjects}>Se interessou? <span>Ver todos <ArrowRight size={16} /></span></a>
      </PinnedProjectsSection>

      <ContactsSection>
        <h4>Contatos</h4>

        <div className="contact-wrapper">
          <IconCard section="contacts" to="mailto:thiagokrugel743@gmail.com" target="_blank">
            <Envelope size={40} />
          </IconCard>
          <IconCard section="contacts" to="https://github.com/thiagokrugel" target="_blank">
            <GithubLogo size={40} />
          </IconCard>
          <IconCard section="contacts" to="https://www.linkedin.com/in/thiago-krügel-25606a26a/" target="_blank">
            <LinkedinLogo size={40} />
          </IconCard>
        </div>
      </ContactsSection>

      <Footer />
    </Container>
  )
}