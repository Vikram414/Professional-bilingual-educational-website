import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

import { motion } from "motion/react";

import {
  GraduationCap,
  Users,
  TrendingUp,
  BookOpen,
  Clock,
  CheckCircle2,
  Laptop,
  UserCheck,
  Building2,
  Briefcase,
  DollarSign,
  ArrowRight,
  Keyboard,
  FileText,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import CertificatesPage from "./CertificateShowcase";

function HomePage() {
  const { language, t } = useLanguage();

  /* =========================================================
     HERO CAROUSEL
  ========================================================= */

  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",

    // "/images/home6.jpg",

    // "/images/home7.jpg",
    // "/images/home8.jpg",
    // "/images/home9.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  /* =========================================================
     STATS
  ========================================================= */

  const stats = [
    {
      icon: Clock,
      value: "30+",
      label: t("yearsExperience"),
    },

    {
      icon: Users,
      value: "10000+",
      label: t("studentsEnrolled"),
    },

    {
      icon: BookOpen,
      value: "6+",
      label: t("coursesOffered"),
    },

    {
      icon: TrendingUp,
      value: "98%",
      label: t("successRate"),
    },
  ];

  /* =========================================================
     COURSES
  ========================================================= */

  const courses = [
    {
      icon: Keyboard,
      title: t("computerTyping"),
      description: t("computerTypingDesc"),
      duration: "6 " + t("months"),
      fees: "₹6,600",

      image: "/images/typing9.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },

    // {
    //   icon: FileText,
    //   title: t("shorthand"),
    //   description: t("shorthandDesc"),
    //   duration: "6 " + t("months"),
    //   fees: "₹6,600",

    //   image:
    //     "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    // },
    {
      icon: FileText,
      title: t("shorthand"),
      description: t("shorthandDesc"),
      duration: "6 " + t("months"),
      fees: "₹6,600",

      image: "/images/steno.jfif",
    },
    {
      icon: Calculator,
      title: t("tally"),
      description: t("tallyDesc"),
      duration: "3 " + t("months"),
      fees: "₹5,000",

      image: "/images/tally.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: GraduationCap,
      title: t("ccc"),

      description:
        language === "en"
          ? "Course on Computer Concepts."
          : "कॉम्प्युटर कॉन्सेप्ट कोर्स.",

      duration: "3 " + t("months"),
      fees: "₹3,500",

      image: "/images/ccc.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: Laptop,
      title: t("dtp"),

      description:
        language === "en"
          ? "Desktop Publishing Course."
          : "डेस्कटॉप पब्लिशिंग कोर्स.",

      duration: "4 " + t("months"),
      fees: "₹6,000",

      image: "/images/DTP.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  /* =========================================================
     FEATURES
  ========================================================= */

  const features = [
    {
      icon: UserCheck,
      title: t("experiencedFaculty"),
      description: t("experiencedFacultyDesc"),
    },

    {
      icon: Building2,
      title: t("govtRecognized"),
      description: t("govtRecognizedDesc"),
    },

    {
      icon: Laptop,
      title: t("modernLab"),
      description: t("modernLabDesc"),
    },

    {
      icon: Clock,
      title: t("flexibleTimings"),
      description: t("flexibleTimingsDesc"),
    },

    {
      icon: Briefcase,
      title: t("placementSupport"),
      description: t("placementSupportDesc"),
    },

    {
      icon: DollarSign,
      title: t("affordableFees"),
      description: t("affordableFeesDesc"),
    },
  ];

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-[#f5fbff]"
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
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden">
        {/* CAROUSEL */}
        {/* <div className="relative h-[660px] md:h-[650px] w-full"> */}
        <div className="relative h-[460px] md:h-[480px] lg:h-[520px] w-full py-70">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <ImageWithFallback
                src={image}
                alt="Hero"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/90 via-[#0078D4]/75 to-[#00B7C3]/70" />
            </div>
          ))}

          {/* CONTENT */}

          {/* <div className="absolute inset-0 z-20 flex items-center"> */}
          <div className="absolute inset-0 z-20 flex items-center pt-2 md:pt-4">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl"
              >
                {/* TOP BADGE */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgba(255,255,255,0.08)] mb-7">
                  <Sparkles className="h-4 w-4 text-cyan-200" />

                  <span className="text-sm md:text-base font-semibold tracking-wide text-white">
                    {language === "en"
                      ? "Mandira Computer Institute"
                      : "मंदिरा कॉम्प्युटर इन्स्टिट्यूट"}
                  </span>
                </div>

                {/* MAIN TITLE */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1] tracking-[-2px]">
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(255,255,255,0.35)]">
                      {language === "en"
                        ? "Mandira Computer"
                        : "मंदिरा कॉम्प्युटर"}
                    </span>
                  </h1>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-1px]">
                    <span className="bg-gradient-to-r from-[#dff6ff] via-white to-[#8be9ff] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(0,183,255,0.4)] whitespace-nowrap">
                      {language === "en"
                        ? "Typing & Shorthand Institute,"
                        : "टायपिंग आणि शॉर्टहँड इन्स्टिट्यूट,"}
                    </span>

                    {/* mobile only line break */}
                    <br className="sm:hidden" />

                    <span className="bg-gradient-to-r from-[#dff6ff] via-white to-[#8be9ff] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(0,183,255,0.4)] whitespace-nowrap">
                      {language === "en" ? " Pandharpur" : "पंढरपूर"}
                    </span>
                  </h2>
                </div>

                {/* PREMIUM LINE */}
                <div className="flex items-center gap-4 mt-8 mb-8">
                  <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-cyan-300 to-white"></div>

                  <div className="w-3 h-3 rounded-full bg-cyan-200 shadow-[0_0_25px_rgba(255,255,255,0.9)]"></div>

                  <div className="w-14 h-[4px] rounded-full bg-gradient-to-r from-white to-cyan-300"></div>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-8 font-medium text-white/90 tracking-wide">
                  {language === "en"
                    ? "Advanced computer training institute with practical learning, modern labs and career-focused premium courses."
                    : "आधुनिक लॅब, प्रॅक्टिकल शिक्षण आणि करिअर-केंद्रित प्रीमियम कोर्सेससह प्रगत कॉम्प्युटर प्रशिक्षण संस्था."}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                  {[
                    language === "en"
                      ? "Government Recognized"
                      : "सरकारी मान्यता",

                    language === "en"
                      ? "100% Practical Training"
                      : "100% प्रॅक्टिकल ट्रेनिंग",

                    language === "en" ? "LMS Available" : "LMS उपलब्ध",

                    language === "en" ? "E-Learn Available" : "E-Learn उपलब्ध",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
        w-full
        px-3 py-3 sm:px-5 sm:py-4

        rounded-xl sm:rounded-2xl

        border border-white/20
        bg-white/10
       

        shadow-[0_10px_35px_rgba(255,255,255,0.08)]

        hover:bg-white/15
        transition-all duration-300

        flex items-center justify-center
        text-center
      "
                    >
                      <span
                        className="
          text-[11px] sm:text-sm md:text-base
          font-semibold text-white
          tracking-wide
        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* =========================================================
          FLOATING BUTTONS
      ========================================================= */}

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/919766500477"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#00C853] hover:bg-[#00b34a] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(0,200,83,0.4)] hover:scale-110 transition-all duration-300">
            <FaWhatsapp size={26} />
          </div>
        </a>

        <a href="tel:+919766500477">
          <div className="bg-[#0078D4] hover:bg-[#106EBE] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(0,120,212,0.4)] hover:scale-110 transition-all duration-300">
            <FaPhoneAlt size={22} />
          </div>
        </a>
      </div>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[26px] p-6 text-center border border-[#e6f2ff] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] mb-4">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </h3>

                <p className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSES
      ========================================================= */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              {t("ourCourses")}
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              {t("coursesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="
    group
    overflow-hidden
    rounded-[28px] bg-white border border-[#e8f2ff]shadow-md
hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      decoding="async"
                      width="500"
                      height="300"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                        <course.icon className="h-6 w-6 text-[#0078D4]" />
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-5">
                    <p className="text-sm text-gray-600 leading-6 mb-5">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-[#0078D4]" />

                        {course.duration}
                      </div>

                      <div className="text-2xl font-black text-[#0078D4]">
                        {course.fees}
                      </div>
                    </div>

                    <div className="flex items-center text-green-600 text-sm font-semibold mb-5">
                      <CheckCircle2 className="h-4 w-4 mr-2" />

                      {t("certification")}
                    </div>

                    <Link to="/contact">
                      <Button className="w-full h-11 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] text-white font-semibold hover:opacity-90 cursor-pointer flex items-center justify-center transition-all duration-300">
                        {t("enrollNow")}

                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CertificatesPage />

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              {language === "en" ? "Why Choose Us?" : "आम्हालाच का निवडाल?"}
            </h2>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} whileHover={{ y: -4 }}>
                <Card className="rounded-[28px] border border-[#e6f2ff] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,120,212,0.12)] transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] flex items-center justify-center mb-5">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
