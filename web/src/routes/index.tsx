import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
};
