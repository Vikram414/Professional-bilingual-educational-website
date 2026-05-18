import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  GraduationCap,
  Clock3,
  Laptop,
  BadgeCheck,
  FileCheck,
  CreditCard,
  Camera,
  School,
} from "lucide-react";

import { Badge } from "../components/ui/badge";

function FAQPage() {
  const { language } = useLanguage();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: GraduationCap,
      question:
        language === "en"
          ? "Which courses are available?"
          : "कोणते कोर्सेस उपलब्ध आहेत?",
      answer:
        language === "en"
          ? "We provide Typing, Shorthand, Tally, CCC, DTP, Computer Courses and professional career-oriented training."
          : "आम्ही टायपिंग, शॉर्टहँड, टॅली, सीसीसी, डीटीपी, आणि विविध करिअर-केंद्रित संगणक कोर्सेस प्रदान करतो.",
    },

    {
      icon: BadgeCheck,
      question:
        language === "en"
          ? "Do you provide certificates?"
          : "प्रमाणपत्र दिले जाते का?",
      answer:
        language === "en"
          ? "Yes, government recognized certificates are provided after successful course completion."
          : "होय, कोर्स पूर्ण झाल्यानंतर सरकारी मान्यताप्राप्त प्रमाणपत्र दिले जाते.",
    },

    {
      icon: Laptop,
      question:
        language === "en"
          ? "Do you provide practical training?"
          : "प्रॅक्टिकल ट्रेनिंग दिले जाते का?",
      answer:
        language === "en"
          ? "Yes, we focus on 100% practical learning with modern computer labs."
          : "होय, आम्ही आधुनिक कॉम्प्युटर लॅबमध्ये 100% प्रॅक्टिकल शिक्षणावर भर देतो.",
    },

    {
      icon: Clock3,
      question:
        language === "en"
          ? "What is the course duration?"
          : "कोर्स कालावधी किती आहे?",
      answer:
        language === "en"
          ? "Course duration depends on the selected course. Most courses range from 3 months to 1 year."
          : "कोर्सचा कालावधी निवडलेल्या कोर्सनुसार असतो. बहुतेक कोर्सेस ३ महिने ते १ वर्षांपर्यंत असतात.",
    },
  ];

  const documents = [
    {
      icon: School,
      title:
        language === "en"
          ? "School Leaving Certificate"
          : "शाळा सोडल्याचा दाखला",

      desc:
        language === "en"
          ? "Any One Leaving Certificate From 1st To 12th Standard"
          : "१ ली ते १२ वी मधील कोणत्याही वर्गाचा एक शाळा सोडल्याचा दाखला आवश्यक आहे",
    },
    {
      icon: CreditCard,
      title: language === "en" ? "Updated Aadhaar Card" : "अपडेटेड आधार कार्ड",

      desc:
        language === "en"
          ? "Valid Updated Aadhaar Card Copy"
          : "वैध अपडेटेड आधार कार्ड प्रत",
    },

    {
      icon: FileCheck,
      title:
        language === "en" ? "10th / 12th Marksheet" : "१० वी / १२ वी मार्कशीट",

      desc:
        language === "en"
          ? "Marksheet Or Passing Certificate"
          : "मार्कशीट किंवा उत्तीर्ण प्रमाणपत्र",
    },

    {
      icon: Camera,
      title: language === "en" ? "Passport Size Photos" : "पासपोर्ट साइज फोटो",

      desc:
        language === "en"
          ? "Recent Passport Size Photographs"
          : "अलीकडील पासपोर्ट साइज फोटो",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-[#f5fbff]"
      style={{
        fontFamily:
          language === "mr"
            ? "'EduardoTunni','BrianBonislawsky','Amita',serif"
            : "Rye, serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A40] via-[#0078D4] to-[#00B7C3]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-cyan-400/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-blue-500/30 blur-[120px] rounded-full" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            <Badge className="bg-white/15 text-white border border-white/20 px-5 py-2 rounded-full mb-6 backdrop-blur-xl text-sm md:text-base shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />

              {language === "en"
                ? "Frequently Asked Questions"
                : "नेहमी विचारले जाणारे प्रश्न"}
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-[#BFE9FF] to-[#E0F7FF] bg-clip-text text-transparent">
                {language === "en"
                  ? "FAQ & Student Support"
                  : "FAQ आणि विद्यार्थी मार्गदर्शन"}
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-7 md:leading-8 font-medium px-2">
              {language === "en"
                ? "Find answers to the most commonly asked questions about our courses, certificates, practical training and institute."
                : "आमच्या कोर्सेस, प्रमाणपत्रे, प्रॅक्टिकल प्रशिक्षण आणि संस्थेबद्दल विचारल्या जाणाऱ्या प्रश्नांची उत्तरे येथे मिळवा."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-200/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/30 blur-[120px] rounded-full" />

        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    rounded-[28px]
                    bg-white/80
                    backdrop-blur-2xl
                    border border-white/40
                    shadow-xl
                    overflow-hidden
                  "
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="
                      w-full
                      flex items-center justify-between
                      gap-4
                      px-6 md:px-8
                      py-6
                      text-left
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          w-14 h-14
                          rounded-2xl
                          bg-gradient-to-r
                          from-[#0078D4]
                          to-[#00B7C3]
                          flex items-center justify-center
                          shadow-lg
                          shrink-0
                        "
                      >
                        <faq.icon className="h-7 w-7 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg md:text-xl font-black text-gray-900 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-[#eef6ff]
                        flex items-center justify-center
                        shrink-0
                      "
                    >
                      <ChevronDown className="h-5 w-5 text-[#0078D4]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8">
                          <div className="w-full rounded-2xl bg-gradient-to-r from-[#eef6ff] to-[#f5fbff] border border-[#dceeff] p-5">
                            <p className="text-gray-700 text-sm md:text-base leading-7 md:leading-8 font-medium break-words whitespace-normal">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ================= DOCUMENTS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-24"
          >
            <div className="text-center mb-14">
              <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full mb-5">
                📄{" "}
                {language === "en"
                  ? "Admission Documents"
                  : "प्रवेशासाठी आवश्यक कागदपत्रे"}
              </Badge>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                {language === "en" ? "Required Documents" : "आवश्यक कागदपत्रे"}
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-8">
                {language === "en"
                  ? "Please carry the following documents during admission."
                  : "प्रवेश घेताना खालील कागदपत्रे सोबत आणा."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="
                    group
                    rounded-[30px]
                    bg-white/80
                    backdrop-blur-2xl
                    border border-white/40
                    shadow-xl
                    overflow-hidden
                    hover:-translate-y-3
                    transition-all duration-500
                  "
                >
                  <div className="p-8 text-center relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#0078D4]/5 via-[#00B7C3]/5 to-transparent" />

                    <div className="relative z-10">
                      <div
                        className="
                          mx-auto mb-6
                          w-20 h-20
                          rounded-3xl
                          bg-gradient-to-r
                          from-[#0078D4]
                          to-[#00B7C3]
                          flex items-center justify-center
                          shadow-[0_12px_35px_rgba(0,120,212,0.35)]
                        "
                      >
                        <doc.icon className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                        {doc.title}
                      </h3>

                      <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                        {doc.desc}
                      </p>

                      <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#0078D4] to-[#00B7C3]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SUPPORT BOX */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              mt-16
              rounded-[32px]
              bg-gradient-to-r
              from-[#061A40]
              via-[#0078D4]
              to-[#00B7C3]
              p-8 md:p-12
              text-center
              shadow-2xl
              text-white
              overflow-hidden
              relative
            "
          >
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                {language === "en"
                  ? "Still Have Questions?"
                  : "अजून प्रश्न आहेत?"}
              </h3>

              <p className="text-white/90 max-w-2xl mx-auto leading-8 text-sm md:text-lg">
                {language === "en"
                  ? "Contact our institute for detailed course information and student guidance."
                  : "कोर्सेस आणि विद्यार्थ्यांच्या मार्गदर्शनासाठी आमच्या संस्थेशी संपर्क साधा."}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919766500477"
                  className="
                    px-8 py-4
                    rounded-2xl
                    bg-white
                    text-[#0078D4]
                    font-bold
                    shadow-xl
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  📞 +91 9766500477
                </a>

                <a
                  href="/contact"
                  className="
                    px-8 py-4
                    rounded-2xl
                    border border-white/30
                    bg-white/10
                    backdrop-blur-xl
                    text-white
                    font-bold
                    hover:bg-white/20
                    transition-all duration-300
                  "
                >
                  {language === "en" ? "Contact Us" : "संपर्क करा"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
