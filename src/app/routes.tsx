import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense, ReactNode } from "react";
import { Root } from "./components/Root";

// Lazy pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const BatchesPage = lazy(() => import("./pages/BatchesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loader UI
const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white">
    <div className="flex space-x-2">
      <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></span>
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></span>
      <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></span>
    </div>

    <p className="mt-4 text-gray-600">Loading...</p>
  </div>
);

// Suspense wrapper (Type-safe)
const withSuspense = (node: ReactNode) => (
  <Suspense fallback={<Loader />}>{node}</Suspense>
);

// Routes typed
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "courses", element: withSuspense(<CoursesPage />) },
      { path: "batches", element: withSuspense(<BatchesPage />) },
      { path: "gallery", element: withSuspense(<GalleryPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "faq", element: withSuspense(<FAQPage />) },
      { path: "*", element: withSuspense(<NotFound />) },
    ],
  },
];

export const router = createBrowserRouter(routes);
