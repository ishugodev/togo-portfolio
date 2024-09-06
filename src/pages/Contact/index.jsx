import { ArrowRight, Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { IconCard } from "../../components/IconCard";
import { Footer } from "../../components/Footer";

export function Contact() {
  return(
    <Container>
      <Header />
      <h1>Contatos</h1>

      <p>
        Sou um profissional em crescimento, focado em ciência de dados, análise de dados e desenvolvimento back-end. Estou sempre aprimorando minhas habilidades e buscando colaborar em projetos. Vamos conversar e explorar como podemos trabalhar juntos!
      </p>

      <div className="contacts-wrapper">
        <IconCard section="contacts">
          <Envelope size={40} />
        </IconCard>
        <IconCard section="contacts">
          <GithubLogo size={40} />
        </IconCard>
        <IconCard section="contacts">
          <LinkedinLogo size={40} />
        </IconCard>
      </div>

      <Footer />
    </Container>
  );
}