import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "@/router";
import { ListLayout } from "@/layouts";
import { ListScene } from "@/scenes/list";
import { DetailScene } from "@/scenes/detail";

export const AppRoutes: React.FC = () => {
    return (
    <Router>
      <ListLayout>
        <Routes>
          <Route path={switchRoutes.list} element={<ListScene/>}/>
          <Route path={switchRoutes.detail} element={<DetailScene/>}/>
          <Route path={switchRoutes.root} element= {<Navigate to={switchRoutes.list}/>}/>
        </Routes>
      </ListLayout>
    </Router>
    )
}