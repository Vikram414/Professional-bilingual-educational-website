import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

import { Button } from "./ui/button";

import { Menu, X, Globe } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);

  const { language, setLanguage, t } = useLanguage();

  const location = useLocation();

  /* ================= LANGUAGE ================= */

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en");
    setIsOpen(false); // 🔥 THIS FIX
  };

  /* ================= NAV LINKS ================= */

  const navLinks = useMemo(
    () => [
      { path: "/", label: t("home") },
      { path: "/about", label: t("about") },
      { path: "/courses", label: t("courses") },
      { path: "/batches", label: t("batches") },
      { path: "/gallery", label: t("gallery") },
      { path: "/faq", label: t("faq") },
      { path: "/contact", label: t("contact") },
    ],
    [language, t],
  );

  const isActive = (path: string) => location.pathname === path;

  /* ================= AUTO CLOSE MENU ================= */

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ================= SMOOTH HEADER ================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -120 }}
        transition={{ duration: 0.35 }}
        className="
          fixed top-0 left-0 w-full z-50

          border-b border-white/20

          bg-white/80 backdrop-blur-2xl

          shadow-[0_8px_40px_rgba(0,0,0,0.06)]
        "
        style={{
          fontFamily:
            language === "mr"
              ? "'EduardoTunni','BrianBonislawsky','Amita',serif"
              : "Rye, serif",
        }}
      >
        {/* TOP GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/5 via-[#00B7C3]/5 to-[#0078D4]/5 pointer-events-none" />

        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className="
              h-[82px]
              lg:h-[90px]

              flex items-center justify-between

              gap-3
            "
          >
            {/* ================= LOGO ================= */}

            <Link
              to="/"
              className="
    flex items-center
    relative z-10
    shrink-0
    min-w-0
    gap-2 sm:gap-3 md:gap-4

    -ml-2
    sm:-ml-1
    md:ml-0
  "
            >
              {/* LOGO */}

              <div
                className="
    flex items-center justify-center
    shrink-0

    w-[50px]
    h-[50px]

    sm:w-[58px]
    sm:h-[58px]

    md:w-[66px]
    md:h-[66px]

    lg:w-[74px]
    lg:h-[74px]
  "
              >
                <img
                  src="/images/mlogo.png"
                  alt="Mandira Institute"
                  loading="eager"
                  className="
      w-full
      h-full
      object-contain
      block
    "
                />
              </div>

              {/* TEXT */}
              <div
                className="
      flex flex-col
      justify-center

      leading-tight
      min-w-0
    "
              >
                <h1
                  className="
        text-[15px]
        sm:text-[18px]
        md:text-[22px]
        lg:text-[26px]

        font-black
        tracking-tight
        whitespace-nowrap

        bg-gradient-to-r
        from-[#061A40]
        via-[#0078D4]
        to-[#00B7C3]
        bg-clip-text
        text-transparent
      "
                >
                  {language === "en" ? "Mandira Computer" : "मंदिरा कॉम्प्युटर"}
                </h1>

                <p
                  className="
        mt-[2px]

        text-[10px]
        sm:text-[11px]
        md:text-[13px]
        lg:text-[15px]

        font-semibold
        text-gray-700

        leading-[1.2]
        tracking-wide

        whitespace-nowrap
      "
                >
                  {language === "en"
                    ? "Typing & Shorthand Institute"
                    : "टायपिंग आणि शॉर्टहँड इन्स्टिट्यूट"}
                </p>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <nav
              className="
                hidden xl:flex

                items-center

                bg-white/90

                backdrop-blur-xl

                px-2
                py-2

                rounded-[24px]

                border border-gray-100

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    min-w-[115px]

                    h-[50px]

                    flex items-center justify-center

                    rounded-2xl

                    px-5

                    text-[18px]

                    font-semibold

                    transition-all duration-300

                    ${
                      isActive(link.path)
                        ? `
                          text-white

                          bg-gradient-to-r
                          from-[#0078D4]
                          to-[#00B7C3]

                          shadow-[0_8px_20px_rgba(0,120,212,0.35)]
                        `
                        : `
                          text-gray-700

                          hover:text-[#0078D4]

                          hover:bg-[#f4fbff]
                        `
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ================= RIGHT ACTIONS ================= */}

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* LANGUAGE BUTTON */}

              <Button
                onClick={toggleLanguage}
                className="
                  hidden md:flex

                  items-center gap-2

                  h-[48px]

                  px-4 lg:px-5

                  rounded-2xl

                  bg-white

                  border border-gray-200

                  text-gray-800

                  font-semibold

                  shadow-[0_6px_20px_rgba(0,0,0,0.05)]

                  hover:bg-[#f8fcff]

                  hover:scale-105

                  transition-all duration-300

                  cursor-pointer
                "
              >
                <Globe className="h-4 w-4 text-[#0078D4]" />

                <span className="text-sm">
                  {language === "en" ? "मराठी" : "English"}
                </span>
              </Button>

              {/* MOBILE MENU */}

              <Button
                variant="ghost"
                size="icon"
                className="
                  xl:hidden

                  h-[48px]
                  w-[48px]

                  rounded-2xl

                  bg-white

                  border border-gray-200

                  shadow-sm

                  hover:bg-[#f8fcff]
                "
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-[#061A40]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#061A40]" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="
                xl:hidden

                border-t border-gray-100

                bg-white/95

                backdrop-blur-3xl

                shadow-2xl
              "
            >
              <div className="px-4 py-5 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center justify-center

                        text-center

                        px-5 py-4

                        rounded-2xl

                        font-semibold

                        transition-all duration-300

                        ${
                          isActive(link.path)
                            ? `
                              bg-gradient-to-r
                              from-[#0078D4]
                              to-[#00B7C3]

                              text-white

                              shadow-lg
                            `
                            : `
                              text-gray-700

                              bg-white

                              border border-gray-100

                              hover:bg-[#f4fbff]

                              hover:text-[#0078D4]
                            `
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* MOBILE LANGUAGE */}

                <Button
                  onClick={toggleLanguage}
                  className="
                    md:hidden

                    w-full

                    h-14

                    mt-3

                    rounded-2xl

                    bg-white

                    border border-gray-200

                    text-gray-800

                    font-semibold

                    hover:bg-[#f4fbff]
                  "
                >
                  <Globe className="h-4 w-4 mr-2 text-[#0078D4]" />

                  {language === "en" ? "मराठी" : "English"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HEADER SPACING FIX */}
      <div className="h-[82px] lg:h-[90px]" />
    </>
  );
}
