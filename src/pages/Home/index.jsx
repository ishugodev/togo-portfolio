import { ArrowRight, Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { api } from "../../services/api";
import { useData } from "../../hooks/data";

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
  const { readData, showFiles, data } = useData();

  function handleModalOpen() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    readData();
    console.log(data)
  }, []);

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
        
        <h1>{Object.keys(data).length > 0 ? data.infos?.name : "carregando..."}</h1>
        
        <h2>{Object.keys(data).length > 0 ? data.infos?.title : "carregando..."}</h2>

        <p>
        {Object.keys(data).length > 0 ? data.infos?.description : "carregando..."}
        </p>

        <div className="stacks-wrapper">
          {
            Object.keys(data).length > 0 ?
              data.stacks?.map(stack =>
                <IconCard
                  key={String(stack.id)}
                  title={stack.name}
                  section="stacks"
                >
                  <img src={showFiles(stack)} alt={`Imagem de ${stack.name}`} />
                  </IconCard>
              )
            :
            "Carregando..."
          }       
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
            <LinkedinLogo />
          </IconCard>
        </div>
      </section>

      <Footer />
    </Container>
  )
}