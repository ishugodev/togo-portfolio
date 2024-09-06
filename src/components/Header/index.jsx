import { List } from "@phosphor-icons/react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);


  function handleToggleMenu() {
    setActiveMenu(!activeMenu);
  }

  return(
    <Container>
      <div>
        <Link to="/">togo</Link>
      
      </div>

      <nav>
        <button
          type="button"
          onClick={handleToggleMenu}
        >
          <List size={24} />
        </button>
        
        <ul className={activeMenu ? 'menu menu-active' : 'menu'}>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>

      </nav>
    </Container>
  )
}