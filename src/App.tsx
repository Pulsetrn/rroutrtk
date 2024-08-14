import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import VansPage from "./pages/VansPage.tsx";
import VansItemPage from "./pages/VansItemPage.tsx";
import "./mirage.js";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Layout from "./Layout/Layout.tsx";
import HostPage from "./pages/HostPages/HostPage.tsx";
import IncomeHostPage from "./pages/HostPages/IncomeHostPage.tsx";
import ReviewsHostPage from "./pages/HostPages/ReviewsHostPage.tsx";
import DashboardHostPage from "./pages/HostPages/DashboardHostPage.tsx";
import VansHostPage from "./pages/HostPages/VansHostPages/VansHostPage.tsx";
import VansItemHostPage from "./pages/HostPages/VansHostPages/VansItemHostPage.tsx";
import VansItemDetails from "./pages/HostPages/VansHostPages/VansItemDetails.tsx";
import VansItemPricing from "./pages/HostPages/VansHostPages/VansItemPricing.tsx";
import VansItemPhotos from "./pages/HostPages/VansHostPages/VansItemPhotos.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={"*"} element={<ErrorPage />} />
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="vans" element={<VansPage />} />
      <Route path="vans/:id" element={<VansItemPage />} />
      <Route path="host" element={<HostPage />}>
        <Route index element={<DashboardHostPage />} />
        <Route path="income" element={<IncomeHostPage />} />
        <Route path="vans" element={<VansHostPage />} />
        <Route path="vans/:id" element={<VansItemHostPage />}>
          <Route index element={<VansItemDetails />} />
          <Route path={"pricing"} element={<VansItemPricing />} />
          <Route path={"photos"} element={<VansItemPhotos />} />
        </Route>
        <Route path="reviews" element={<ReviewsHostPage />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
