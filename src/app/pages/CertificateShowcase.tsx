import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#f8fcff] via-white to-[#eef8ff]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0078D4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B7C3]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div
            className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          bg-[#0078D4]/10
          text-[#0078D4]
          font-bold text-sm
          mb-5
        "
          >
            {language === "en"
              ? "Government Approved Certificates"
              : "सरकार द्वारा अनुमोदित प्रमाणपत्र"}
          </div>

          <h2
            className="
          text-4xl md:text-6xl
          font-black
          tracking-tight
          text-[#061A40]
        "
          >
            {language === "en" ? "Certificate Showcase" : "प्रमाणपत्र प्रदर्शन"}
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Recognized typing and shorthand certificates under Maharashtra State Council of Examinations, Pune."
              : "महाराष्ट्र राज्य परीक्षा परिषद, पुणे अंतर्गत मान्यताप्राप्त टायपिंग आणि शॉर्टहँड प्रमाणपत्रे."}
          </p>
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div
            className="
          group relative
          bg-white/80 backdrop-blur-xl
          border border-white/30
          rounded-[32px]
          overflow-hidden
          shadow-[0_15px_50px_rgba(0,120,212,0.10)]
          hover:-translate-y-2
          transition-all duration-500
        "
          >
            {/* TOP BAR */}
            <div className="h-2 bg-gradient-to-r from-[#0078D4] to-[#00B7C3]" />

            <div className="p-7">
              {/* CERTIFICATE IMAGE */}
              <div
                className="
              rounded-2xl overflow-hidden
              border border-gray-200
              shadow-lg
              bg-gray-100
            "
              >
                <img
                  src="/images/certificate.jpeg"
                  alt="English Typing Certificate"
                  onClick={() => setSelectedImage("/images/certificate.jpeg")}
                  className="
    w-full h-[260px]
    object-cover
    group-hover:scale-105
    transition-all duration-700
    cursor-pointer
  "
                />
              </div>

              {/* CONTENT */}
              <div className="mt-6">
                <div
                  className="
                inline-block
                px-3 py-1
                rounded-full
                bg-[#0078D4]/10
                text-[#0078D4]
                text-xs
                font-bold
                mb-3
              "
                >
                  {language === "en" ? "English Typing" : "इंग्रजी टायपिंग"}
                </div>

                <h3 className="text-2xl font-black text-[#061A40]">
                  {language === "en"
                    ? "30 / 40 WPM"
                    : "३० / ४० शब्द प्रति मिनट"}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {language === "en"
                    ? "Government recognized English typing certificate."
                    : "सरकार द्वारा मान्यता प्राप्त अंग्रेजी टायपिंग प्रमाणपत्र।"}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
          group relative
          bg-white/80 backdrop-blur-xl
          border border-white/30
          rounded-[32px]
          overflow-hidden
          shadow-[0_15px_50px_rgba(0,120,212,0.10)]
          hover:-translate-y-2
          transition-all duration-500
        "
          >
            <div className="h-2 bg-gradient-to-r from-[#061A40] to-[#0078D4]" />

            <div className="p-7">
              <div
                className="
              rounded-2xl overflow-hidden
              border border-gray-200
              shadow-lg
              bg-gray-100
            "
              >
                <img
                  src="/images/certificate.jpeg"
                  alt="English Typing Certificate"
                  onClick={() => setSelectedImage("/images/certificate.jpeg")}
                  className="
    w-full h-[260px]
    object-cover
    group-hover:scale-105
    transition-all duration-700
    cursor-pointer
  "
                />
              </div>

              <div className="mt-6">
                <div
                  className="
                inline-block
                px-3 py-1
                rounded-full
                bg-[#00B7C3]/10
                text-[#00B7C3]
                text-xs
                font-bold
                mb-3
              "
                >
                  {language === "en" ? "Marathi Typing" : "मराठी टायपिंग"}
                </div>

                <h3 className="text-2xl font-black text-[#061A40]">
                  {language === "en"
                    ? "30 / 40 WPM"
                    : "३० / ४० शब्द प्रति मिनट"}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {language === "en"
                    ? "Maharashtra Government approved Marathi typing certificate."
                    : "महाराष्ट्र सरकार द्वारा अनुमोदित मराठी टायपिंग प्रमाणपत्र।"}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
          group relative
          bg-white/80 backdrop-blur-xl
          border border-white/30
          rounded-[32px]
          overflow-hidden
          shadow-[0_15px_50px_rgba(0,120,212,0.10)]
          hover:-translate-y-2
          transition-all duration-500
        "
          >
            <div className="h-2 bg-gradient-to-r from-[#00B7C3] to-[#0078D4]" />

            <div className="p-7">
              <div
                className="
              rounded-2xl overflow-hidden
              border border-gray-200
              shadow-lg
              bg-gray-100
            "
              >
                <img
                  src="/images/certificate.jpeg"
                  alt="English Typing Certificate"
                  onClick={() => setSelectedImage("/images/certificate.jpeg")}
                  className="
    w-full h-[260px]
    object-cover
    group-hover:scale-105
    transition-all duration-700
    cursor-pointer
  "
                />
              </div>

              <div className="mt-6">
                <div
                  className="
                inline-block
                px-3 py-1
                rounded-full
                bg-[#061A40]/10
                text-[#061A40]
                text-xs
                font-bold
                mb-3
              "
                >
                  {language === "en" ? "Shorthand" : "शॉर्टहँड"}
                </div>

                <h3 className="text-2xl font-black text-[#061A40]">
                  {language === "en"
                    ? "Govt Approved"
                    : "सरकार मान्यता प्राप्त"}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {language === "en"
                    ? "Professional shorthand certification for competitive exams."
                    : "स्पर्धात्मक परीक्षांसाठी व्यावसायिक शॉर्टहँड प्रमाणपत्र।"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {selectedImage &&
          createPortal(
            <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
              >
                ✕
              </button>

              <img
                src={selectedImage}
                className="max-h-[95vh] max-w-[95vw] object-contain"
              />
            </div>,
            document.body,
          )}

        {/* BOTTOM TRUST SECTION */}
        <div
          className="
        mt-16
        rounded-[32px]
        bg-gradient-to-r from-[#061A40] to-[#0078D4]
        p-10
        text-center
        text-white
        shadow-[0_20px_60px_rgba(0,120,212,0.25)]
      "
        >
          <div className="flex justify-center mb-5">
            <img
              src="/images/fav-logo.gif"
              alt="MSCE Pune"
              className="w-38 h-38 object-contain rounded-2xl"
            />
          </div>

          <h3 className="text-3xl font-black mb-4">
            {language === "en"
              ? "Recognized by Maharashtra State Council of Examinations, Pune"
              : "महाराष्ट्र राज्य परीक्षा परिषद, पुणे द्वारा मान्यता प्राप्त"}
          </h3>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "All certificates are recognized and valuable for government and private sector opportunities."
              : "सर्व प्रमाणपत्रे शासकीय व खाजगी क्षेत्रातील संधींसाठी मान्यताप्राप्त आहेत."}
          </p>
        </div>
      </div>
    </section>
  );
}
