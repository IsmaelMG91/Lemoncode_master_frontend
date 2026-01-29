import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ListPage } from "./list.tsx"
import { DetailPage } from "./detail.tsx";
import { OrganizationProvider } from "./context.tsx";

export const App = () => {
  return (
    <>
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
      </Router>
    </OrganizationProvider>
    </>
  )
}

export default App;
