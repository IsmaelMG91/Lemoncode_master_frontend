import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListPod } from "@/pods"
import { DetailPage } from "@/detail";
import { switchRoutes } from "@/router";
import { ListLayout } from "@/layouts";

export const AppRoutes: React.FC = () => {
    return (
    <Router>
      <ListLayout>
        <Routes>
          <Route path={switchRoutes.list} element={<ListPod/>}/>
          <Route path={switchRoutes.detail} element={<DetailPage/>}/>
          <Route path={switchRoutes.root} element= {<Navigate to={switchRoutes.list}/>}/>
        </Routes>
      </ListLayout>
    </Router>
    )
}