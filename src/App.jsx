import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AppLayout from "./Layouts/AppLayout";
import LandingPage from "./Pages/LandingPage";
import OnboardingPage from "./Pages/OnboardingPage";
import JobListingPage from "./Pages/JobListingPage";
import Jobs from "./Pages/Jobs";
import MyJobs from "./Pages/MyJobs";
import PostJob from "./Pages/PostJob";
import SavedJobs from "./Pages/SavedJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <OnboardingPage /> },
      { path: "/jobs", element: <JobListingPage /> },
      { path: "/job/:jobId", element: <Jobs /> },
      { path: "/myjobs", element: <MyJobs /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-job", element: <SavedJobs /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
