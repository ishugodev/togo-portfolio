import { HandPointing } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function ProjectCard({ title, description, image, link, ...rest }) {
  return(
    <Container
      title={title}
      $description={description}
      $image={image}
      href={link}
      target="_blank"
      {...rest}
    >
      <div className="image-wrapper">
        <img src={image} alt={`Imagem do projeto`} />
      </div>

      <div className="text">
        <div>
          <strong>{title}</strong>

          <p>
            {description}
          </p>
        </div>

        <p className="click-here">Clique para ver mais <HandPointing size={20} /></p>
      </div>

    </Container>
  );
}