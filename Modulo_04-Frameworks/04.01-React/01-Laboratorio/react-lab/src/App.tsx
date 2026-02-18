
import { AppRoutes } from "@/router";
import { OrganizationProvider } from "./context/organization.context.tsx";
import { PageProvider } from "./context/page.context.tsx";

export const App: React.FC = () => {
  return (
    <>
    <OrganizationProvider>
      <PageProvider>
        <AppRoutes/>
      </PageProvider>
    </OrganizationProvider>
    </>
  )
}

export default App;
