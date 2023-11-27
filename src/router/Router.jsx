import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiComponente from "../components/miComponente/MiComponente";
import MiContador from "../components/miComponente/miContador/MiContador";
import MisProductos from "../components/miComponente/MisProductos/MisProductos";
import DetallesProductos from "../components/miComponente/DetallesProducto/DetallesProductos";
import Layout from "../components/layout/Layout.jsx";
import MiContadorConUseReducer from "../components/MiContadorConUseReducer/MiContadorConUseReducer.jsx";
import MiToDoList from "../components/MiToDoList/MiToDoList.jsx";

const Router = () => {
  const [userLogged, userLoggedDispatch] = useReducer(
    userLoggedReducer,
    userLoggedInitial
  );

  const [postState, postDispatch] = useReducer(postReducer, postInitial);

  const globalState = {
    userLogged: {
      userLogged,
      userLoggedDispatch,
    },
    postReducerInfo: {
      postState,
      postDispatch,
    },
  };
  return (
    <AppContext.Provider value={globalState}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                element={
                  <PrivateRoutes isAuthenticate={userLogged.isAuthenticated} />
                }
              >
                <Route path="/miTodoList" element={<MiToDoList />} />
              </Route>
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
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default Router;
