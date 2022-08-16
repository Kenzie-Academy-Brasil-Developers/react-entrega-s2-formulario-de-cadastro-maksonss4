import { DashboardProvider } from "./DashboardProvider";
import { LoginProvider } from "./LoginProvider";
import { RegistrationProvider } from "./RegistrationProvider";

export function Providers({ children }) {
  return (
    <RegistrationProvider>
      <LoginProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </LoginProvider>
    </RegistrationProvider>
  );
}
