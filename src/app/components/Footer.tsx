import { Link } from "react-router-dom";
import { useMemo } from "react";

import { useLanguage } from "../contexts/LanguageContext";

import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  const { language, t } = useLanguage();

  /* ================= QUICK LINKS ================= */

  const quickLinks = useMemo(
    () => [
      { path: "/", label: t("home") },
      { path: "/about", label: t("about") },
      { path: "/courses", label: t("courses") },
      { path: "/batches", label: t("batches") },
      { path: "/gallery", label: t("gallery") },
      { path: "/faq", label: t("faq") },
      { path: "/contact", label: t("contact") },
    ],
    [language],
  );

  /* ================= COURSES ================= */

  const courses = useMemo(
    () => [t("computerTyping"), t("shorthand"), t("tally"), t("ccc"), t("dtp")],
    [language],
  );

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#eef6ff]
        via-white
        to-[#f5fbff]
        border-t
        border-[#dcefff]
      "
      style={{
        fontFamily:
          language === "mr"
            ? "'EduardoTunni','BrianBonislawsky','Amita',serif"
            : "Rye, serif",
      }}
    >
      {/* LIGHT BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#0078D4]/5 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00B7C3]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ================= ABOUT ================= */}

          <div>
            <div className="flex items-start gap-3 mb-5">
              <div
                className="
                  shrink-0
                  bg-gradient-to-br
                  from-[#0078D4]
                  to-[#00B7C3]
                  p-3
                  rounded-2xl
                  shadow-lg
                "
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </div>

              <h2
                className="
                  text-gray-900
                  text-lg
                  md:text-xl
                  font-black
                  leading-snug
                "
              >
                {language === "en"
                  ? "Mandira Computer Typing & Shorthand Institute, Pandharpur"
                  : "मंदिरा कॉम्प्युटर टायपिंग आणि शॉर्टहँड संस्था, पंढरपूर"}
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 mb-6">
              {t("aboutInstituteDesc")}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/mandiracomputers",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/mandiracomputers?igsh=eHk1bW5ocnB5cWdh",
                },
                {
                  icon: Youtube,
                  link: "https://youtube.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  className="
                    bg-white
                    border
                    border-[#dcefff]
                    p-3
                    rounded-xl
                    hover:bg-[#0078D4]
                    hover:text-white
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="text-gray-900 text-xl font-black mb-5">
              {t("quickLinks")}
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="
                      inline-flex
                      items-center
                      text-sm
                      font-medium
                      text-gray-600
                      hover:text-[#0078D4]
                      transition-colors
                      duration-300
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COURSES ================= */}

          <div>
            <h3 className="text-gray-900 text-xl font-black mb-5">
              {t("ourCourses")}
            </h3>

            <ul className="space-y-4">
              {courses.map((course, index) => (
                <li
                  key={index}
                  className="
                    text-sm
                    font-medium
                    text-gray-600
                    hover:text-[#0078D4]
                    transition-colors
                    duration-300
                  "
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-gray-900 text-xl font-black mb-5">
              {t("getInTouch")}
            </h3>

            <ul className="space-y-5">
              {/* ADDRESS */}

              <li className="flex items-start gap-3">
                <div className="bg-white border border-[#dcefff] p-2.5 rounded-xl shadow-sm shrink-0">
                  <MapPin className="h-4 w-4 text-[#0078D4]" />
                </div>

                <span className="text-sm text-gray-600 leading-6">
                  {t("address")}
                </span>
              </li>

              {/* EMAIL */}

              <li className="flex items-center gap-3">
                <div className="bg-white border border-[#dcefff] p-2.5 rounded-xl shadow-sm shrink-0">
                  <Mail className="h-4 w-4 text-[#0078D4]" />
                </div>

                <a
                  href="mailto:mandiracomputers@gmail.com"
                  className="
                    text-sm
                    text-gray-600
                    hover:text-[#0078D4]
                    transition-colors
                  "
                >
                  mandiracomputers@gmail.com
                </a>
              </li>

              {/* PHONE */}

              <li className="flex items-center gap-3">
                <div className="bg-white border border-[#dcefff] p-2.5 rounded-xl shadow-sm shrink-0">
                  <Phone className="h-4 w-4 text-[#0078D4]" />
                </div>

                <a
                  href="tel:+919766500477"
                  className="
                    text-sm
                    text-gray-600
                    hover:text-[#0078D4]
                    transition-colors
                  "
                >
                  +91 9766500477
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="border-t border-[#dcefff] mt-12 pt-6 text-center">
          <p className="text-sm text-gray-600 leading-6">
            © 2026{" "}
            {language === "en"
              ? "Mandira Computer Typing & Shorthand Institute, Pandharpur"
              : "मंदिरा कॉम्प्युटर टायपिंग आणि शॉर्टहँड संस्था, पंढरपूर"}
            . {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
