import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListPage } from "@/list"
import { DetailPage } from "@/detail";
import { switchRoutes } from "@/router";

export const AppRoutes: React.FC = () => {
    return (
    <Router>
        <Routes>
          <Route path={switchRoutes.list} element={<ListPage/>}/>
          <Route path={switchRoutes.detail} element={<DetailPage/>}/>
          <Route path={switchRoutes.root} element= {<Navigate to={switchRoutes.list}/>}/>
        </Routes>
    </Router>
    )
}