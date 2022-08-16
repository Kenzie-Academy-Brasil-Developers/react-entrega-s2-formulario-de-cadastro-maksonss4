import { ModalContainer } from "./style";

export function Modal({ children }) {
  return (
    <ModalContainer>
      <div className="modal_box">{children}</div>
    </ModalContainer>
  );
}
