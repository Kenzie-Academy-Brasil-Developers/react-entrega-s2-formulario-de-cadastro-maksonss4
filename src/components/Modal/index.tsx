import { IProvidersProps } from "../../Providers";
import { ModalContainer } from "./style";

export function Modal({ children }: IProvidersProps) {
  return (
    <ModalContainer>
      <div className="modal_box">{children}</div>
    </ModalContainer>
  );
}
