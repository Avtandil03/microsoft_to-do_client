import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { Provider } from "react-redux";

export const withRouter = (component: () => React.ReactNode) => () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="Loading...">
        {component()}
      </Suspense>
    </BrowserRouter>
  </Provider>
);