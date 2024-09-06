import { Container, ChildElement } from "./styles";
import { sectionStyles } from "../../src/styles/stylesConfig";

export function IconCard({ children, title, section }) {
  const styles = sectionStyles[section];

  return(
    <Container
      title={title}
      size={styles?.size}
      $border={styles?.border}
      $child_size={styles?.child_size}
      $fontSize={styles?.fontSize}
    >
      {children && <ChildElement>{children}</ChildElement>}
      {title}
    </Container>
  )
}