import { List } from "@phosphor-icons/react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, MainBar, MenuBar } from "./styles";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleToggleMenu() {
    setActiveMenu(!activeMenu);
  }

  return(
    <Container>
      <MainBar>
        <Link to="/">togo</Link>

        <ul>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>

        <button
          type="button"
          onClick={handleToggleMenu}
        >
          <List size={24} />
        </button>
      </MainBar>

      <MenuBar>
        <ul className={activeMenu ? 'actived' : ''}>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </MenuBar>
    </Container>
  )
}