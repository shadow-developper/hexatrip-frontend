import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {
  AdvisorsPage,
  AdvisorsSinglePage,
  AgenciesPage,
  CheckoutPage,
  CheckoutSuccessPage,
  HotlinePage,
  Landing,
  Layout,
  LoginPage,
  ProfilePage,
  ResearchPage,
  RegisterPage,
  SingleTripPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "research", element: <ResearchPage /> },
      { path: "research/:id", element: <SingleTripPage /> },
      { path: "advisors", element: <AdvisorsPage /> },
      { path: "advisors/:id", element: <AdvisorsSinglePage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "agencies", element: <AgenciesPage /> },
      { path: "hotline", element: <HotlinePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/checkout-success", element: <CheckoutSuccessPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
