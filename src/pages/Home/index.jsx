import { ArrowRight, Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

import { useState } from "react"
import { Link } from "react-router-dom"

import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Modal } from "../../components/Modal"
import { ProjectCard } from "../../components/ProjectCard"
import { IconCard } from "../../components/IconCard"
import { Footer } from "../../components/Footer"

import node from "../../assets/icon_node.svg"
import powerBi from "../../assets/icon_powerBi.svg"
import python from "../../assets/icon_python.svg"
import sqlServer from "../../assets/icon_sqlServer.svg"

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(!modalOpen)
  }

  return (
    <Container>
      <Modal
        className="modalContact"
        modalOpen={modalOpen}
        modalClose={handleModalOpen}
      >
        <strong>Entrar em contato</strong>

        <Link to="mailto:thiagokrugel743@gmail.com" target="_blank"><Envelope size={24} />E-mail</Link>
        <Link to="https://github.com/thiagokrugel" target="_blank"><GithubLogo size={24} />Github</Link>
        <Link to="https://www.linkedin.com/in/thiago-krügel-25606a26a/" target="_blank"><LinkedinLogo size={24} />LinkedIn</Link>
      </Modal>

      <Header />

      <section id="intro">
        <h1>Oi! Eu sou Thiago Krügel</h1>
        <h2>Cientista, Analista de dados, Desenvolvedor Back-end</h2>

        <p>
        Profissional em crescimento nas áreas de ciência de dados, análise de dados e desenvolvimento back-end, aplicando e aprimorando habilidades enquanto busca entregar soluções e insights relevantes.
        </p>

        <div className="stacks-wrapper">
          <IconCard title="Power BI" section="stacks">
            <img src={powerBi} alt="Ícone Node.js" />
          </IconCard>
          <IconCard title="SQL Server" section="stacks">
            <img src={sqlServer} alt="Ícone Node.js" />
          </IconCard>
          <IconCard title="Python" section="stacks">
            <img src={python} alt="Ícone Node.js" />
          </IconCard>
          <IconCard title="Node.js" section="stacks">
            <img src={node} alt="Ícone Node.js" />
          </IconCard>
        </div>

        <button className="contact" onClick={handleModalOpen}>
          Entrar em contato
        </button>
      </section>

      <section id="pinned-projects">
        <h3>Projetos em destaque</h3>

        <div className="projects-wrapper">
          <ProjectCard />
          <ProjectCard />
        </div>

        <a className="see-all" href="">Se interessou? <span>Ver todos <ArrowRight size={16} /></span></a>
      </section>

      <section id="contacts">
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
      </section>

      <Footer />
    </Container>
  )
}