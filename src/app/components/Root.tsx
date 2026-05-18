import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../pages/ScrollToTop";
import { LanguageProvider } from "../contexts/LanguageContext";

export function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        {/* AUTO SCROLL TOP */}
        <ScrollToTop />

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
