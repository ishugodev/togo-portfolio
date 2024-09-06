import { List } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";

import { Container } from "./styles";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleToggleMenu() {
    setActiveMenu(!activeMenu);
  }

  return(
    <Container>
      <div>
        <a href="">togo</a>
      
      </div>

      <nav>
        <button
          type="button"
          onClick={handleToggleMenu}
        >
          <List size={24} />
        </button>
        
        <ul className={activeMenu ? 'menu menu-active' : 'menu'}>
          <li><a href="">Projetos</a></li>
          <li><a href="">Contato</a></li>
        </ul>

      </nav>
    </Container>
  )
}