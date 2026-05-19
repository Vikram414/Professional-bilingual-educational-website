import { Languages } from "lucide-react";
import { motion } from "motion/react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function ContactPage() {
  const { language } = useLanguage();
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#f4f9ff] via-white to-[#eef7ff] overflow-hidden"
      // style={{
      //   fontFamily:
      //     language === "mr"
      //       ? "'Noto Sans Devanagari', sans-serif"
      //       : "'Poppins', sans-serif",
      // }}

      style={{
        fontFamily:
          language === "mr"
            ? "'EduardoTunni','BrianBonislawsky','Amita',serif"
            : "Rye, serif",
      }}
    >
      {/* HERO */}
      <section className="relative py-30 md:py-34 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#031B34] via-[#0078D4] to-[#00C2FF]" />

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-400/30 blur-[100px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/30 blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* SMALL BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 mb-6 text-xs md:text-sm font-medium">
              <span className=" text-white font-medium tracking-wide">
                {language === "en" ? "Get In Touch" : "आमच्याशी संपर्क साधा"}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              <span className="bg-gradient-to-r from-white via-[#dff6ff] to-[#a8ecff] bg-clip-text text-transparent">
                {language === "en" ? "Contact Us" : "आमच्याशी संपर्क साधा"}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-8">
              {language === "en"
                ? "Contact us for admissions, course details and career guidance."
                : "प्रवेश, कोर्स माहिती आणि करिअर मार्गदर्शनासाठी आमच्याशी संपर्क साधा."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* ADDRESS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-2xl rounded-[30px] p-7 border border-white shadow-[0_15px_50px_rgba(0,120,212,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#00B7C3] flex items-center justify-center shadow-xl mb-5">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3">
                {language === "en" ? "Address" : "पत्ता"}
              </h2>

              <p className="text-gray-600 leading-8 text-[15px]">
                {language === "en"
                  ? "Manisha Nagar, Nagar Palika bhaji Mandai, Shoping Center Shop No. 16,17,19,20 Pandharpur, Maharashtra, India"
                  : "मनीषा नगर, नगर पालिका भाजी मंडई, शॉपिंग सेंटर शॉप नं. 16,17,19,20 पंढरपुर, महाराष्ट्र, भारत"}
                <br />
              </p>
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white/80 backdrop-blur-2xl rounded-[30px] p-7 border border-white shadow-[0_15px_50px_rgba(0,120,212,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B7C3] to-[#4CC2FF] flex items-center justify-center shadow-xl mb-5">
                <FaPhoneAlt className="text-white text-xl" />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3">
                {language === "en" ? "Phone" : "फोन"}
              </h2>

              <a
                href="tel:+919766500477"
                className="text-[#0078D4] font-bold text-lg hover:underline"
              >
                +91 9766500477
              </a>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white/80 backdrop-blur-2xl rounded-[30px] p-7 border border-white shadow-[0_15px_50px_rgba(0,120,212,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center shadow-xl mb-5">
                <FaEnvelope className="text-white text-xl" />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3">
                {language === "en" ? "Email" : "ईमेल"}
              </h2>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mandiracomputers@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4] font-semibold break-all hover:text-[#005fa3] hover:underline transition-all duration-300"
              >
                mandiracomputers@gmail.com
              </a>
            </motion.div>
          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14"
          >
            {/* WHATSAPP */}
            <a
              href="https://wa.me/919766500477"
              target="_blank"
              className="group"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white px-8 py-4 rounded-2xl font-bold shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300">
                <FaWhatsapp className="text-2xl" />
                WhatsApp
              </div>
            </a>

            {/* CALL */}
            <a href="tel:+919766500477" className="group">
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#0078D4] to-[#00B7C3] text-white px-8 py-4 rounded-2xl font-bold shadow-[0_15px_40px_rgba(0,120,212,0.3)] hover:scale-105 transition-all duration-300">
                <FaPhoneAlt className="text-xl" />
                Call Now
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[35px] border border-white shadow-[0_20px_70px_rgba(0,120,212,0.15)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.99168453677!2d75.31692658395818!3d17.67392323438075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41915feca5217%3A0xba284d75212d6f5e!2sMandira%20Computer%20Typing%20and%20Shorthand%20Institute%2C%20Pandharpur!5e0!3m2!1sen!2sin!4v1779000236496!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px]"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
