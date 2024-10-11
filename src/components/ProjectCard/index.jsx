import { HandPointing } from "@phosphor-icons/react";

import { Container } from "./styles";

export function ProjectCard(to) {
  return(
    <Container
      to={to}
    >
      <img src="https://camo.githubusercontent.com/c88ddae516a261b5ff3cca90d160730d7c282529605b9d70c5bb48ac4b238f88/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f61696b617473757374617273363836342f696d616765732f662f66302f415338323132322e706e672f7265766973696f6e2f6c61746573743f63623d3230313731313136313735303534" alt={`Imagem do projeto`} />

      <div className="description">
        <strong>Lorem ipsum</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis volutpat elit, et suscipit urna. Donec ultricies, est vitae cursus dapibus, sem ex pretium mi, ut varius tortor nisi et nibh. Aenean vel porttitor risus, id tincidunt diam. Quisque dictum libero id metus tincidunt bibendum. Vivamus posuere leo et rutrum dictum.
        </p>

        <p className="click-here" href="">Clique para ver mais <HandPointing size={20} /></p>
      </div>

    </Container>
  );
}