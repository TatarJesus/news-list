import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes/ListRoutes";
import { ContainerRoutes } from "../components/ContainerRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerRoutes />}>
        {publicRoutes.map((route, index) =>
          index === 0 ? (
            <Route key={route.path} index element={<route.element />} />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          )
        )}
      </Route>
    </Routes>
  );
};
