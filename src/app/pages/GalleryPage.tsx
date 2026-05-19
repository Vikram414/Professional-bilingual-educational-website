import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "../contexts/LanguageContext";

import { GraduationCap, Upload, Trash2, Lock, X } from "lucide-react";

export function GalleryPage() {
  const { language } = useLanguage();

  /* ================= ADMIN ================= */

  const [isAdmin, setIsAdmin] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const [password, setPassword] = useState("");

  const [tapCount, setTapCount] = useState(0);

  /* ================= DEFAULT IMAGES ================= */

  const defaultImages = [
    "/images/imgi_2.jpg",
    "/images/imgi_3.jpg",
    "/images/imgi_4.jpg",
    "/images/imgi_5.jpg",
    "/images/imgi_6.jpg",
    "/images/imgi_7.jpg",
    "/images/imgi_8.jpg",
    "/images/imgi_9.jpg",
    "/images/imgi_10.jpg",
    "/images/imgi_11.jpg",
    "/images/imgi_12.jpg",
    "/images/imgi_13.jpg",
    "/images/imgi_14.jpg",
    "/images/imgi_15.jpg",
    "/images/imgi_16.jpg",
    "/images/imgi_17.jpg",
    "/images/imgi_18.jpg",
    "/images/imgi_19.jpg",
    "/images/imgi_20.jpg",
    "/images/imgi_21.jpg",
  ];

  /* ================= IMAGES ================= */

  const [images, setImages] = useState<string[]>(defaultImages);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* ================= LOAD SAVED IMAGES ================= */

  useEffect(() => {
    const savedImages = localStorage.getItem("gallery-images");

    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  /* ================= IMAGE COMPRESS ================= */

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();

        img.src = event.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");

          const ctx = canvas.getContext("2d");

          const maxWidth = 800;

          const scaleSize = maxWidth / img.width;

          canvas.width = maxWidth;

          canvas.height = img.height * scaleSize;

          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);

          resolve(compressedBase64);
        };
      };
    });
  };

  /* ================= LOGIN ================= */

  const handleLogin = () => {
    if (password === "1234") {
      setIsAdmin(true);

      setShowLogin(false);

      setPassword("");
    } else {
      alert("Wrong Password");
    }
  };

  /* ================= UPLOAD ================= */

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const compressedImages = await Promise.all(
      Array.from(files).map((file) => compressImage(file)),
    );

    const updatedImages = [...images, ...compressedImages];

    setImages(updatedImages);

    localStorage.setItem("gallery-images", JSON.stringify(updatedImages));
  };

  /* ================= DELETE ================= */

  const handleDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);

    setImages(updatedImages);

    localStorage.setItem("gallery-images", JSON.stringify(updatedImages));
  };

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

      <section className="relative overflow-hidden py-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A40] via-[#0078D4] to-[#00B7C3]" />

        {/* BG EFFECT */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* BADGE */}

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl text-white border border-white/30 shadow-lg mb-6 text-xs md:text-sm font-medium">
              <GraduationCap className="h-4 w-4" />

              {language === "en" ? "Institute Gallery" : "संस्थेची गॅलरी"}
            </div>

            {/* TITLE */}

            <h1
              onClick={() => {
                const newCount = tapCount + 1;

                setTapCount(newCount);

                if (newCount >= 5) {
                  setShowLogin(true);

                  setTapCount(0);
                }
              }}
              className="text-4xl md:text-6xl font-black leading-tight mb-5 cursor-pointer select-none"
            >
              <span className="bg-gradient-to-r from-white via-[#dff6ff] to-[#a8ecff] bg-clip-text text-transparent">
                {language === "en" ? "Our Memories" : "आमच्या आठवणी"}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="text-xl text-white/90 leading-relaxed">
              {language === "en"
                ? "Explore our classrooms, students & training moments"
                : "आमचे क्लासरूम, विद्यार्थी आणि प्रशिक्षण क्षण पहा"}
            </p>

            {/* UPLOAD */}

            {isAdmin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                className="mt-8"
              >
                <label className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold cursor-pointer hover:scale-105 transition shadow-xl">
                  <Upload size={18} />
                  Upload Photos
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    hidden
                    onChange={handleUpload}
                  />
                </label>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= LOGIN MODAL ================= */}

      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLogin(false)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#0f172a]/95 border border-white/10 rounded-3xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-3 border border-cyan-400/20">
                  <Lock className="text-cyan-300" size={24} />
                </div>

                <h2 className="text-2xl font-bold text-white">Admin Login</h2>

                <p className="text-sm text-white/60 mt-1">
                  Secure Gallery Access
                </p>
              </div>

              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-2xl
                  text-white
                  placeholder:text-white/50
                  bg-white/10
                  border
                  border-white/10
                  outline-none
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/30
                  transition
                "
              />

              <button
                onClick={handleLogin}
                className="
                  w-full
                  mt-5
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  text-white
                  font-semibold
                  hover:opacity-90
                  transition
                  shadow-lg
                  cursor-pointer
                "
              >
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= GALLERY ================= */}

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-5">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="mb-5 break-inside-avoid relative group"
              >
                {/* IMAGE */}

                <div
                  onClick={() => setSelectedImage(img)}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_18px_40px_rgba(0,120,212,0.18)]
                    cursor-pointer
                    bg-white
                    transition-all
                    duration-500
                    border
                    border-[#e8f3ff]
                  "
                >
                  <img
                    src={img}
                    alt="gallery"
                    loading="lazy"
                    draggable={false}
                    className="
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* DELETE */}

                {isAdmin && (
                  <button
                    onClick={() => handleDelete(index)}
                    className="
                      absolute
                      top-3
                      right-3
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      p-2
                      rounded-full
                      shadow-lg
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{
                scale: 0.7,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.7,
              }}
              transition={{
                duration: 0.3,
              }}
              src={selectedImage}
              alt="preview"
              className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default React.memo(GalleryPage);
