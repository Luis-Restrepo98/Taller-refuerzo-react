import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiComponente from "../components/miComponente/MiComponente";
import MiContador from "../components/miComponente/miContador/MiContador";
import MisProductos from "../components/miComponente/MisProductos/MisProductos";
import DetallesProductos from "../components/miComponente/DetallesProducto/DetallesProductos";
import Layout from "../components/layout/Layout.jsx";
import MiContadorConUseReducer from "../components/MiContadorConUseReducer/MiContadorConUseReducer.jsx";
import MiTodoList from "../components/MiTodoList/MiTodoList.jsx";
import Login from "../components/login/Login.jsx";
import PublicRoutes from "../../src/router/PublicRoutes.jsx";
import PrivateRoutes from "../../src/router/PrivatedRoutes.jsx";
import userLoggedReducer, {
  userLoggedInitial,
} from "../components/Reducer/userLoggedReducer";
import { ChakraProvider } from "@chakra-ui/react";

export const AppContext = createContext({});

const Router = () => {
  const [userLogged, userLoggedDispatch] = useReducer(
    userLoggedReducer,
    userLoggedInitial
  );

  const globalState = {
    userLogged: {
      userLogged,
      userLoggedDispatch,
    },
  };
  return (
    <AppContext.Provider value={globalState}>
      <ChakraProvider>
        <BrowserRouter basename="/Taller-refuerzo-react">
          <Routes>
            <Route element={<Layout />}>
              <Route
                element={
                  <PublicRoutes isAuthenticate={userLogged.isAuthenticated} />
                }
              >
                <Route index path="/" element={<MiComponente />} />
                <Route path="/login" element={<Login />} />
                <Route path="/micomponente" element={<MiComponente />} />
                <Route path="/micontador" element={<MiContador />} />
                <Route path="/misproductos" element={<MisProductos />} />
                <Route
                  path="/misproductos/:id"
                  element={<DetallesProductos />}
                />
                <Route
                  path="/miContadorUseReducer"
                  element={<MiContadorConUseReducer />}
                />
              </Route>
              <Route
                element={
                  <PrivateRoutes isAuthenticate={userLogged.isAuthenticated} />
                }
              >
                <Route path="/mitodolist" element={<MiTodoList/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default Router;
