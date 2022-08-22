import { ReactNode } from "react";
import { DashboardProvider } from "./DashboardProvider";
import { LoginProvider } from "./LoginProvider";
import { RegistrationProvider } from "./RegistrationProvider";

export interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <RegistrationProvider>
      <LoginProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </LoginProvider>
    </RegistrationProvider>
  );
}
