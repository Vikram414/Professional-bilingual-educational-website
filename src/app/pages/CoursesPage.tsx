import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import {
  Clock,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";

function CoursesPage() {
  const { language, t } = useLanguage();

  const courses = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2881/2881142.png",
      title: t("computerTyping"),
      description: t("computerTypingDesc"),
      duration: "6 " + t("months"),
      fees: "₹6,600",
      color: "from-[#10B981] to-[#059669]",
      syllabus: [
        language === "en"
          ? "English Typing (30/40/50/60 WPM)"
          : "इंग्रजी टायपिंग (30/40/50/60 WPM)",

        language === "en"
          ? "Marathi Typing (30/40 WPM)"
          : "मराठी टायपिंग (30/40 WPM)",

        language === "en"
          ? "Hindi Typing (30/40 WPM)"
          : "हिंदी टायपिंग (30/40 WPM)",
      ],
      students: "2500+",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      title: t("shorthand"),
      description: t("shorthandDesc"),
      duration: "6 " + t("months"),
      fees: "₹6,600",
      color: "from-[#EC4899] to-[#DB2777]",
      syllabus: [
        language === "en"
          ? "English (60/80/100/120/130/140/150/160 WPM)"
          : "इंग्रजी (60/80/100/120/130/140/150/160 WPM)",

        language === "en"
          ? "Marathi (60/80/100/120 WPM)"
          : "मराठी (60/80/100/120 WPM)",

        language === "en"
          ? "Hindi (60/80/100/120 WPM)"
          : "हिंदी (60/80/100/120 WPM)",
      ],
      students: "800+",
    },

    {
      image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      title: t("tally"),
      description: t("tallyDesc"),
      duration: "3 " + t("months"),
      fees: "₹5,000",
      color: "from-[#F97316] to-[#EA580C]",
      syllabus: [
        language === "en" ? "Tally Prime with GST" : "टॅली प्राईम GST सह",

        language === "en" ? "Accounting & Inventory" : "लेखा आणि इन्व्हेंटरी",

        language === "en" ? "Payroll Management" : "वेतन व्यवस्थापन",

        language === "en" ? "Banking & Taxation" : "बँकिंग आणि कर आकारणी",
      ],
      students: "1800+",
    },

    {
      image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
      title: "CCC",
      description:
        language === "en"
          ? "Course on Computer Concepts"
          : "कॉम्प्युटर कॉन्सेप्ट कोर्स",
      duration: "3 " + t("months"),
      fees: "₹3,500",
      color: "from-[#3B82F6] to-[#2563EB]",
      syllabus: [
        language === "en" ? "Computer Fundamentals" : "संगणक मूलतत्त्वे",

        language === "en" ? "MS Office" : "एमएस ऑफिस",

        language === "en" ? "Internet & Email" : "इंटरनेट आणि ईमेल",

        language === "en" ? "Digital Services" : "डिजिटल सेवा",
      ],
      students: "1500+",
    },

    {
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      title: "DTP",
      description:
        language === "en"
          ? "Desktop Publishing Course"
          : "डेस्कटॉप पब्लिशिंग कोर्स",
      duration: "4 " + t("months"),
      fees: "₹6,000",
      color: "from-[#8B5CF6] to-[#7C3AED]",
      syllabus: [
        language === "en" ? "CorelDRAW" : "कोरेलड्रॉ",

        language === "en" ? "Photoshop" : "फोटोशॉप",

        language === "en" ? "PageMaker" : "पेजमेकर",

        language === "en" ? "Graphic Designing" : "ग्राफिक डिझाईन",
      ],
      students: "1200+",
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
      {/* HERO */}
      <section className="relative overflow-hidden py-30">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0078D4,#00B7C3,#4CC2FF)]"></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A40] via-[#0078D4] to-[#00B7C3]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-4 py-1.5 rounded-full shadow-lg mb-6 text-xs md:text-sm font-medium">
              <GraduationCap className="h-3.5 w-3.5 mr-2" />

              {language === "en"
                ? "Professional Training Programs"
                : "व्यावसायिक प्रशिक्षण कार्यक्रम"}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              <span className="bg-gradient-to-r from-white via-[#dff6ff] to-[#a8ecff] bg-clip-text text-transparent">
                {language === "en" ? "Our Courses" : "आमचे कोर्सेस"}
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              {language === "en"
                ? "Premium computer training programs for career growth."
                : "करिअर वाढीसाठी प्रीमियम संगणक प्रशिक्षण अभ्यासक्रम."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      {/* COURSES */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group rounded-[22px] border border-gray-100 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 h-full">
                  <CardHeader className="pb-3 px-4 pt-4">
                    {/* IMAGE + TITLE */}
                    <div className="flex items-center gap-3">
                      {/* IMAGE */}
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center p-2 shrink-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* TITLE */}
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                          {course.title}
                        </CardTitle>

                        <p className="text-xs text-gray-500 mt-1">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <CardDescription className="text-[13px] text-gray-600 leading-5 mt-3">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-4 pb-4">
                    {/* FEES + STUDENTS */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#f5fbff] border border-[#dcefff] rounded-lg px-3 py-2">
                        <p className="text-[11px] text-gray-500">
                          {language === "en" ? "Students" : "विद्यार्थी"}
                        </p>

                        <h4 className="text-sm font-bold text-gray-900">
                          {course.students}
                        </h4>
                      </div>

                      <div className="text-right">
                        <p className="text-[11px] text-gray-500">{t("fees")}</p>

                        <h3 className="text-xl font-black text-[#0078D4]">
                          {course.fees}
                        </h3>
                      </div>
                    </div>

                    {/* COURSE CONTENT */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Sparkles className="h-3.5 w-3.5 text-[#0078D4] mr-2" />

                        <h4 className="text-sm font-bold text-gray-900">
                          {language === "en" ? "Course Content" : "अभ्यासक्रम"}
                        </h4>
                      </div>

                      <div className="space-y-1.5">
                        {course.syllabus.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start bg-[#f8fbff] rounded-lg px-2.5 py-2 border border-[#eef4ff]"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />

                            <span className="text-[13px] text-gray-700 leading-5">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CERTIFICATE */}
                    <div className="rounded-lg bg-green-50 border border-green-200 px-3 py-2 mb-4 flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />

                      <span className="text-[13px] font-semibold text-green-700">
                        {t("certification")}
                      </span>
                    </div>

                    {/* BUTTON */}
                    <Link to="/contact">
                      <Button className="w-full h-10 rounded-lg bg-gradient-to-r from-[#0078D4] to-[#00B7C3] text-white text-sm font-semibold hover:opacity-90 cursor-pointer flex items-center justify-center transition-all duration-300">
                        {t("enrollNow")}
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
