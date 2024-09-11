import { X } from "@phosphor-icons/react";

import { useEffect } from "react";

import { Container, Overlay } from "./styles";

export function Modal({ modalOpen, modalClose, children, ...rest }) {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen])

  return(
    modalOpen && (

    <>
      <Overlay onClick={modalClose} />

      <Container {...rest}>
        <button onClick={modalClose}><X size={32} /></button>
        {children}
      </Container>
    </>
    )
  );
}