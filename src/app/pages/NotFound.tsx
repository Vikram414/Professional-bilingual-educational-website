import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  const { language } = useLanguage();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center p-4"
      style={{
        fontFamily:
          language === "mr"
            ? "'Noto Sans Devanagari', sans-serif"
            : "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {language === "en" ? "Page Not Found" : "पृष्ठ सापडले नाही"}
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-md mx-auto">
          {language === "en"
            ? "The page you're looking for doesn't exist or has been moved."
            : "तुम्ही शोधत असलेले पृष्ठ अस्तित्वात नाही किंवा हलवले गेले आहे."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Home className="mr-2 h-5 w-5" />
              {language === "en" ? "Go Home" : "मुख्यपृष्ठावर जा"}
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {language === "en" ? "Go Back" : "मागे जा"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
