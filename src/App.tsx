import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      { path: "checkout/", element: <CheckoutPage /> },
      { path: "agencies", element: <AgenciesPage /> },
      { path: "hotline", element: <HotlinePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/checkout-success", element: <CheckoutSuccessPage /> },
]);
