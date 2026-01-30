
import { AppRoutes } from "@/router";
import { OrganizationProvider } from "./context.tsx";

export const App: React.FC = () => {
  return (
    <>
    <OrganizationProvider>
      <AppRoutes/>
    </OrganizationProvider>
    </>
  )
}

export default App;
