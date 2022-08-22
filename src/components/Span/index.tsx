import { IProvidersProps } from "../../Providers";
import { ContainerSpan } from "./style";

export function Span({ children }: IProvidersProps) {
  return <ContainerSpan>{children}</ContainerSpan>;
}
