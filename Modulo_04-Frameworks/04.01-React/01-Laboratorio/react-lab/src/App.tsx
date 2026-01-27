import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ListPage } from "./list.tsx"
import { DetailPage } from "./detail.tsx";

export const App = () => {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<ListPage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
