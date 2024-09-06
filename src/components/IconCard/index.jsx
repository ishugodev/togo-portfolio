import { useNavigate } from "react-router-dom";

import { Container, ChildElement } from "./styles";
import { sectionStyles } from "../../styles/stylesConfig";

export function IconCard({ children, title, section, to, ...rest}) {
  const styles = sectionStyles[section];

  return(
    <Container
      title={title}
      size={styles?.size}
      $border={styles?.border}
      $child_size={styles?.child_size}
      $fontSize={styles?.fontSize}
      to={to}
      {...rest}
    >
      {children && <ChildElement>{children}</ChildElement>}
      {title}
    </Container>
  )
}