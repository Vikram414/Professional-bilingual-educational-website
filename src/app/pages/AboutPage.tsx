import { useLanguage } from "../contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

import {
  GraduationCap,
  Target,
  Eye,
  Award,
  Users,
  Building2,
  FileCheck,
  Trophy,
  BookOpen,
  Laptop,
  UserCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function AboutPage() {
  const { language } = useLanguage();

  const milestones = [
    {
      year: "1997",
      title: language === "en" ? "Institute Founded" : "संस्थेची स्थापना",
      icon: Building2,
    },
    {
      year: "2012",
      title: language === "en" ? "Govt Recognition" : "सरकारी मान्यता",
      icon: Award,
    },
    {
      year: "2018",
      title:
        language === "en"
          ? "5000+ Students Trained"
          : "५०००+ विद्यार्थी प्रशिक्षित",
      icon: Users,
    },
    {
      year: "2026",
      title: language === "en" ? "Leading Institute" : "अग्रगण्य संस्था",
      icon: Trophy,
    },
  ];

  const certifications = [
    {
      name: language === "en" ? "ISO Certified" : "ISO प्रमाणित",
      icon: Award,
    },
    {
      name:
        language === "en" ? "MSCE Pattern Training" : "MSCE पॅटर्न प्रशिक्षण",
      icon: FileCheck,
    },
    {
      name: language === "en" ? "Government Approved" : "सरकारी मान्यताप्राप्त",
      icon: ShieldCheck,
    },
    {
      name:
        language === "en"
          ? "Career Oriented Courses"
          : "करिअर-केंद्रित कोर्सेस",
      icon: Sparkles,
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: language === "en" ? "Quality Education" : "दर्जेदार शिक्षण",
      desc:
        language === "en"
          ? "Industry-ready practical skills."
          : "उद्योगासाठी उपयुक्त प्रॅक्टिकल कौशल्ये.",
    },

    {
      icon: UserCheck,
      title: language === "en" ? "Expert Faculty" : "तज्ज्ञ शिक्षक",
      desc:
        language === "en"
          ? "Experienced trainers and mentors."
          : "अनुभवी शिक्षक व मार्गदर्शक.",
    },

    {
      icon: Laptop,
      title: language === "en" ? "Modern Lab" : "आधुनिक लॅब",
      desc:
        language === "en"
          ? "Advanced computers & practical setup."
          : "आधुनिक संगणक व प्रॅक्टिकल सेटअप.",
    },

    {
      icon: Trophy,
      title: language === "en" ? "Best Results" : "उत्कृष्ट निकाल",
      desc:
        language === "en"
          ? "Excellent student success rate."
          : "उत्कृष्ट विद्यार्थी यश दर.",
    },
  ];

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-[#f5fbff]"
      style={{
        fontFamily:
          language === "mr"
            ? "'EduardoTunni','BrianBonislawsky','Amita',serif"
            : "Rye, serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A40] via-[#0078D4] to-[#00B7C3]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-cyan-400/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-blue-500/30 blur-[120px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            <Badge className="bg-white/15 text-white border border-white/20 px-5 py-2 rounded-full mb-6 backdrop-blur-xl text-sm md:text-base shadow-lg">
              <GraduationCap className="h-4 w-4 mr-2" />

              {language === "en"
                ? "Trusted Institute Since 1997"
                : "१९९७ पासून विश्वासार्ह संस्था"}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              <span className="block text-lg md:text-2xl text-white/80 mb-3 font-semibold">
                {language === "en" ? "Welcome To" : "आपले स्वागत आहे"}
              </span>

              <span className="bg-gradient-to-r from-white via-[#BFE9FF] to-[#E0F7FF] bg-clip-text text-transparent">
                {language === "en"
                  ? "Mandira Computer Typing & Shorthand Institute, Pandharpur"
                  : "मंदिरा कॉम्प्युटर टायपिंग व शॉर्टहँड संस्था"}
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-7 md:leading-8 font-medium px-2">
              {language === "en"
                ? "Professional computer education, typing and shorthand training with practical learning and career-focused courses since 1997."
                : "१९९७ पासून प्रॅक्टिकल शिक्षण, टायपिंग व शॉर्टहँड प्रशिक्षण आणि करिअर-केंद्रित संगणक कोर्सेस."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full mb-5">
                <Sparkles className="h-4 w-4 mr-2" />

                {language === "en"
                  ? "About Our Institute"
                  : "आमच्या संस्थेबद्दल"}
              </Badge>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                {language === "en"
                  ? "Professional Computer Education Since 1997"
                  : "१९९७ पासून व्यावसायिक संगणक शिक्षण"}
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
                {language === "en"
                  ? "Mandira Computer Typing & Shorthand Institute provides modern computer education, typing and shorthand training with practical learning methods and experienced faculty."
                  : "मंदिरा कॉम्प्युटर टायपिंग व शॉर्टहँड संस्था आधुनिक संगणक शिक्षण, टायपिंग व शॉर्टहँड प्रशिक्षण आणि प्रॅक्टिकल शिक्षण प्रदान करते."}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  language === "en"
                    ? "Government Recognized Courses"
                    : "सरकारी मान्यताप्राप्त कोर्सेस",

                  language === "en"
                    ? "Modern Computer Lab"
                    : "आधुनिक कॉम्प्युटर लॅब",

                  language === "en" ? "Experienced Faculty" : "अनुभवी शिक्षक",

                  language === "en"
                    ? "100% Practical Training"
                    : "100% प्रॅक्टिकल ट्रेनिंग",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-[#e8f2ff] rounded-2xl p-4 shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-gray-700 font-semibold text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="Students"
                  className="rounded-[24px] h-[180px] sm:h-[220px] md:h-[260px] object-cover shadow-2xl"
                />

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Computer Lab"
                  className="rounded-[24px] h-[180px] sm:h-[220px] md:h-[260px] object-cover shadow-2xl mt-6"
                />

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  alt="Typing"
                  className="rounded-[24px] h-[180px] sm:h-[220px] md:h-[260px] object-cover shadow-2xl -mt-6"
                />

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Institute"
                  className="rounded-[24px] h-[180px] sm:h-[220px] md:h-[260px] object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: language === "en" ? "Our Mission" : "आमचे ध्येय",
              text:
                language === "en"
                  ? "To provide quality computer education with practical knowledge and professional skills."
                  : "प्रॅक्टिकल ज्ञान आणि व्यावसायिक कौशल्यांसह दर्जेदार संगणक शिक्षण देणे.",
            },

            {
              icon: Eye,
              title: language === "en" ? "Our Vision" : "आमची दृष्टी",
              text:
                language === "en"
                  ? "To become one of Maharashtra’s leading computer training institutes."
                  : "महाराष्ट्रातील अग्रगण्य संगणक प्रशिक्षण संस्था बनणे.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="rounded-[28px] bg-white/80 backdrop-blur-2xl border border-white/40 shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] flex items-center justify-center mb-5">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl md:text-3xl font-black">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-base md:text-lg leading-8">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="py-16 md:py-24 bg-white/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black">
              {language === "en" ? "Our Journey" : "आमचा प्रवास"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-[28px] bg-white shadow-xl text-center p-6 hover:-translate-y-2 transition-all duration-500 h-full">
                  <m.icon className="mx-auto h-10 w-10 text-[#0078D4]" />

                  <h3 className="text-3xl md:text-4xl font-black mt-4 text-[#0078D4]">
                    {m.year}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {m.title}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black">
              {language === "en"
                ? "Certifications & Recognition"
                : "प्रमाणपत्रे व मान्यता"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-[28px] bg-white/80 backdrop-blur-xl text-center p-6 md:p-8 shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <c.icon className="mx-auto h-10 w-10 md:h-12 md:w-12 text-[#0078D4]" />

                  <h3 className="mt-5 text-lg md:text-xl font-bold text-gray-800">
                    {c.name}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef6ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black">
              {language === "en" ? "Our Values" : "आमची मूल्ये"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-[28px] p-6 text-center bg-white/80 backdrop-blur-xl shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <v.icon className="mx-auto h-10 w-10 text-[#0078D4]" />

                  <h3 className="text-xl font-bold mt-4">{v.title}</h3>

                  <p className="text-gray-600 mt-3 leading-7 text-sm md:text-base">
                    {v.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS ================= */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-200/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/30 blur-[120px] rounded-full" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full mb-5">
              📍 {language === "en" ? "Our Campus" : "आमचे कॅम्पस"}
            </Badge>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-5">
              {language === "en"
                ? "Visit Our Institute"
                : "आमच्या संस्थेला भेट द्या"}
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-8">
              {language === "en"
                ? "Modern computer labs and professional learning environment in Pandharpur."
                : "पंढरपूरमधील आधुनिक कॉम्प्युटर लॅब आणि व्यावसायिक शिक्षण वातावरण."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white/40 shadow-xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl md:text-4xl font-black mb-5 bg-gradient-to-r from-[#0078D4] to-[#00B7C3] bg-clip-text text-transparent leading-[1.4]">
                  {language === "en"
                    ? "Mandira Computer Typing & Shorthand Institute - Pandharpur"
                    : "मंदिरा कॉम्प्युटर टायपिंग व शॉर्टहँड संस्था - पंढरपूर"}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
                  {language === "en"
                    ? "Professional training institute with modern computer labs and practical education."
                    : "आधुनिक कॉम्प्युटर लॅब आणि प्रॅक्टिकल शिक्षणासह व्यावसायिक प्रशिक्षण संस्था."}
                </p>

                <div className="space-y-4">
                  {[
                    language === "en"
                      ? "Typing & Shorthand Training"
                      : "टायपिंग व शॉर्टहँड प्रशिक्षण",

                    language === "en"
                      ? "Professional Computer Courses"
                      : "व्यावसायिक संगणक कोर्सेस",

                    language === "en" ? "Experienced Faculty" : "अनुभवी शिक्षक",

                    language === "en"
                      ? "Practical Learning"
                      : "प्रॅक्टिकल शिक्षण",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] flex items-center justify-center text-white font-bold shrink-0">
                        ✓
                      </div>

                      <span className="text-gray-700 font-semibold text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] p-5 text-white shadow-xl">
                <h4 className="text-lg md:text-xl font-black mb-2">
                  {language === "en" ? "Location" : "पत्ता"}
                </h4>

                <p className="text-white/90 leading-7 text-sm md:text-base">
                  {language === "en"
                    ? " 📍 Manisha Nagar, Nagar Palika bhaji Mandai, Shoping Center, Shop No. 16,17,19,20 Pandharpur, Maharashtra, India"
                    : " 📍 मनीषा नगर, नगर पालिका भाजी मंडई, शॉपिंग सेंटर, शॉप नं. १६,१७,१९,२० पंढरपूर, महाराष्ट्र, भारत"}
                  {/* 📍 Manisha Nagar, Nagar Palika bhaji Mandai, Shoping Center
                  Shop No. 16,17,19,20 Pandharpur, Maharashtra, India */}
                  <br />
                  📞 +91 9766500477
                  {language === "en"
                    ? " (Call or WhatsApp)"
                    : " (कॉल किंवा व्हाट्सएप)"}
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              <div className="overflow-hidden rounded-[32px] shadow-xl h-[280px] md:h-[320px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
                  alt="Institute"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="overflow-hidden rounded-[32px] shadow-xl h-[280px] md:h-[320px] border border-white/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.99168453677!2d75.31692658395818!3d17.67392323438075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41915feca5217%3A0xba284d75212d6f5e!2sMandira%20Computer%20Typing%20and%20Shorthand%20Institute%2C%20Pandharpur!5e0!3m2!1sen!2sin!4v1779000236496!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
