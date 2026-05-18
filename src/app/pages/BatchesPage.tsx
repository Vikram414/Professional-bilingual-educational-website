import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

import { motion } from "motion/react";

import { Clock, Users, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface Batch {
  id: string;
  course: string;
  image: string;
  timing: string;
  duration: string;
  fees: string;
  color: string;
}

function BatchesPage() {
  const { language, t } = useLanguage();

  const batches: Batch[] = [
    {
      id: "TYP-01",
      course: t("computerTyping"),
      image: "https://cdn-icons-png.flaticon.com/512/2881/2881142.png",
      timing: "8:00 AM - 8:00 PM",
      duration: "1 " + (language === "en" ? "Hour" : "तास"),
      fees: "₹6,600",
      color: "from-[#10B981] to-[#059669]",
    },

    {
      id: "SH-01",
      course: t("shorthand"),
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      timing: "8:00 AM - 8:00 PM",
      duration: "1 " + (language === "en" ? "Hour" : "तास"),
      fees: "₹6,600",
      color: "from-[#EC4899] to-[#DB2777]",
    },

    {
      id: "TAL-01",
      course: t("tally"),
      image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      timing: "8:00 AM - 8:00 PM",
      duration: "1 " + (language === "en" ? "Hour" : "तास"),
      fees: "₹5,000",
      color: "from-[#F97316] to-[#EA580C]",
    },

    {
      id: "CCC-01",
      course: t("ccc"),
      image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
      timing: "8:00 AM - 8:00 PM",
      duration: "1 " + (language === "en" ? "Hour" : "तास"),
      fees: "₹3,500",
      color: "from-[#3B82F6] to-[#2563EB]",
    },

    {
      id: "DTP-01",
      course: t("dtp"),
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      timing: "8:00 AM - 8:00 PM",
      duration: "1 " + (language === "en" ? "Hour" : "तास"),
      fees: "₹6,000",
      color: "from-[#8B5CF6] to-[#7C3AED]",
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A40] via-[#0078D4] to-[#00B7C3]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-6 py-3 rounded-full shadow-lg mb-6 text-xs md:text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />

              {language === "en" ? "Available Batches" : "उपलब्ध बॅचेस"}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              <span className="bg-gradient-to-r from-white via-[#dff6ff] to-[#a8ecff] bg-clip-text text-transparent">
                {language === "en" ? "Batches" : " बॅचेस"}
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              {language === "en"
                ? "Choose your preferred timing between 8 AM to 8 PM."
                : "सकाळी 8 ते रात्री 8 पर्यंत तुमच्या सोयीची वेळ निवडा."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BATCH CARDS */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {batches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="rounded-[26px] border border-[#dcefff] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full">
                  {/* TOP COLOR */}
                  {/* <div className={`h-1.5 bg-gradient-to-r ${batch.color}`} /> */}

                  <CardHeader className="px-5 pt-5 pb-3">
                    {/* IMAGE + TITLE */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-[#dcefff] shadow-md p-3 flex items-center justify-center">
                        <img
                          src={batch.image}
                          alt={batch.course}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <CardTitle className="text-2xl font-black text-gray-900">
                          {batch.course}
                        </CardTitle>

                        <p className="text-sm text-gray-500 mt-1">
                          Batch ID : {batch.id}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-5 pb-5">
                    {/* TIMING */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between rounded-xl bg-[#f8fbff] border border-[#edf4ff] px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-[#0078D4]" />

                          {language === "en" ? "Timing" : "वेळ"}
                        </div>

                        <span className="font-bold text-sm text-gray-900">
                          {batch.timing}
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#f8fbff] border border-[#edf4ff] px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-[#0078D4]" />

                          {language === "en" ? "Batch Size" : "बॅच क्षमता"}
                        </div>

                        <span className="font-bold text-sm text-gray-900">
                          30 Students
                        </span>
                      </div>
                    </div>

                    {/* FEES */}
                    <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#0078D4]/10 to-[#00B7C3]/10 border border-[#dcefff] px-4 py-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          {t("duration")}
                        </p>

                        <p className="font-bold text-gray-900">
                          {batch.duration}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">
                          {t("fees")}
                        </p>

                        <p className="text-2xl font-black bg-gradient-to-r from-[#0078D4] to-[#00B7C3] bg-clip-text text-transparent">
                          {batch.fees}
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="rounded-xl bg-green-50 border border-green-200 p-3 mb-4 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />

                      <span className="text-sm font-bold text-green-700">
                        {language === "en"
                          ? "Admissions Open"
                          : "प्रवेश सुरू आहेत"}
                      </span>
                    </div>

                    {/* BUTTON */}
                    <Link to="/contact">
                      <Button className="w-full h-11 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#00B7C3] text-white font-semibold hover:opacity-90 cursor-pointer flex items-center justify-center transition-all duration-300">
                        {language === "en" ? "Register Now" : "आता प्रवेश घ्या"}

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
    </div>
  );
}

export default BatchesPage;
