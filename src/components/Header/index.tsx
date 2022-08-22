import { IProvidersProps } from "../../Providers";
import { Logo } from "../Logo";
import { HeaderContainer } from "./style";

export function Header({ children }: IProvidersProps) {
  return (
    <HeaderContainer>
      <Logo />
      {children}
    </HeaderContainer>
  );
}
