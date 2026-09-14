import { AppRoutes } from "@/router";
import {
  SearchValueProvider,
  PageProvider,
  PageNameProvider,
  SearchCharacterProvider,
} from "./context";

export const App: React.FC = () => {
  return (
    <>
      <PageNameProvider>
        <SearchValueProvider>
          <SearchCharacterProvider>
            <PageProvider>
              <AppRoutes />
            </PageProvider>
          </SearchCharacterProvider>
        </SearchValueProvider>
      </PageNameProvider>
    </>
  );
};

export default App;
