import React, { createContext, useContext, useState } from "react";

type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    courses: "Courses",
    batches: "Batches",
    admission: "Admission",
    feePayment: "Fee Payment",
    studentDashboard: "Student Dashboard",
    adminDashboard: "Admin Dashboard",
    typingPractice: "Typing Practice",
    faq: "FAQ",
    contact: "Contact",
    gallery: "Gallery",

    // Hero Section
    heroTitle: "Mandira Computer Training & Shorthand Institute",
    heroSubtitle: "Excellence in Computer Education & Stenography Training",
    heroDescription:
      "Government recognized institute offering professional courses in Computer Training, Typing, Tally, and Shorthand",
    enrollNow: "Enroll Now",
    // payFeesOnline: "Pay Fees Online",
    bookBatch: "Book a Batch",
    viewCourses: "View Courses",

    // Stats
    yearsExperience: "Years Experience",
    studentsEnrolled: "Students Enrolled",
    coursesOffered: "Courses Offered",
    successRate: "Success Rate",

    // Courses
    ourCourses: "Our Courses",
    coursesSubtitle: "Professional Training Programs",
    duration: "Duration",
    fees: "Fees",
    certification: "Certification Included",
    months: "Months",

    // Course Names
    basicComputer: "Basic Computer Course",
    basicComputerDesc:
      "Learn computer fundamentals, MS Office, Internet, and email",
    mscit: "MS-CIT",
    mscitDesc: "Maharashtra State Certificate in Information Technology",
    computerTyping: "Computer Typing",
    computerTypingDesc:
      "Professional typing training in Marathi, English & Hindi",
    tally: "Tally",
    tallyDesc: "Complete accounting software training with GST",
    shorthand: "Shorthand (Stenography)",
    shorthandDesc: "Professional stenography and speed writing course",
    specialTyping: "Special Skill in Computer Typing",
    specialTypingDesc: "Advanced typing skills for competitive exams",
    ccc: "CCC",
    cccDesc: "Computer Certificate Course - Basic Computer Skills",
    dtp: "DTP",
    dtpDesc: "Desktop Publishing Software Training",

    // Batches
    upcomingBatches: "Upcoming Batches",
    batchesSubtitle: "Join Our Next Session",
    available: "Available",
    fewSeatsLeft: "Few Seats Left",
    batchFull: "Batch Full",
    seatsAvailable: "Seats Available",
    startsOn: "Starts On",
    timing: "Timing",
    registerNow: "Register Now",

    // Testimonials
    testimonials: "Student Testimonials",
    testimonialsSubtitle: "What Our Students Say",

    // Features
    whyChooseUs: "Why Choose Us",
    experiencedFaculty: "Experienced Faculty",
    experiencedFacultyDesc: "Learn from certified and experienced instructors",
    govtRecognized: "Government Recognized",
    govtRecognizedDesc: "Approved institute with valid certifications",
    modernLab: "Modern Computer Lab",
    modernLabDesc: "State-of-the-art infrastructure and equipment",
    flexibleTimings: "Flexible Timings",
    flexibleTimingsDesc: "Morning, afternoon, and evening batches available",
    placementSupport: "Placement Support",
    placementSupportDesc: "Job assistance and interview preparation",
    affordableFees: "Affordable Fees",
    affordableFeesDesc: "Quality education at competitive prices",

    // Contact
    getInTouch: "Get In Touch",
    location: "Location",
    email: "Email",
    phone: "Phone",
    address:
      "Manisha Nagar, Nagar Palika bhaji Mandai, Shoping Center Shop No. 16,17,19,20 Pandharpur, Maharashtra, India",

    // Footer
    aboutInstitute: "About Institute",
    aboutInstituteDesc:
      "Mandira Computer Training and Shorthand Institute is a leading educational institution in Pandharpur, providing quality computer education and stenography training.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",

    // Admission Form
    admissionForm: "Online Admission Form",
    personalDetails: "Personal Details",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    mobileNumber: "Mobile Number",
    emailAddress: "Email Address",
    courseSelection: "Course Selection",
    selectCourse: "Select Course",
    selectBatch: "Select Batch",
    batchTiming: "Batch Timing",
    documents: "Documents",
    uploadPhoto: "Upload Photo",
    uploadId: "Upload ID Proof",
    submitApplication: "Submit Application",

    // Fee Payment
    onlineFeePayment: "Online Fee Payment",
    studentId: "Student ID",
    selectPaymentMethod: "Select Payment Method",
    upi: "UPI",
    debitCard: "Debit/Credit Card",
    netBanking: "Net Banking",
    amountToPay: "Amount to Pay",
    payNow: "Pay Now",

    // Student Dashboard
    welcome: "Welcome",
    profile: "Profile",
    courseDetails: "Course Details",
    feeDetails: "Fee Details",
    totalFees: "Total Fees",
    paidAmount: "Paid Amount",
    pendingBalance: "Pending Balance",
    paymentHistory: "Payment History",
    date: "Date",
    amount: "Amount",
    status: "Status",
    receipt: "Receipt",
    download: "Download",
    attendance: "Attendance",
    performance: "Performance",
    certificate: "Certificate",
    downloadCertificate: "Download Certificate",

    // Admin Dashboard
    adminPanel: "Admin Panel",
    overview: "Overview",
    totalStudents: "Total Students",
    totalRevenue: "Total Revenue",
    activebatches: "Active Batches",
    pendingFees: "Pending Fees",
    studentManagement: "Student Management",
    batchManagement: "Batch Management",
    feeManagement: "Fee Management",
    createNewBatch: "Create New Batch",
    batchName: "Batch Name",
    maxSeats: "Maximum Seats",
    startDate: "Start Date",
    endDate: "End Date",
    create: "Create",

    // Typing Practice
    typingPracticeTitle: "Interactive Typing Practice",
    selectLanguage: "Select Language",
    english: "English",
    marathi: "Marathi",
    hindi: "Hindi",
    startPractice: "Start Practice",
    speed: "Speed",
    accuracy: "Accuracy",
    wpm: "WPM",
    reset: "Reset",

    // Common
    loading: "Loading...",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    search: "Search",
    filter: "Filter",
    export: "Export",
    print: "Print",
  },
  mr: {
    // Header
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    courses: "अभ्यासक्रम",
    batches: "बॅचेस",
    admission: "प्रवेश",
    feePayment: "शुल्क भरणा",
    studentDashboard: "विद्यार्थी डॅशबोर्ड",
    adminDashboard: "प्रशासक डॅशबोर्ड",
    typingPractice: "टायपिंग सराव",
    contact: "संपर्क",
    faq: "प्रश्नोत्तरे",
    gallery: "गॅलरी",

    // Hero Section
    heroTitle: "मंदिरा कॉम्प्युटर ट्रेनिंग आणि शॉर्टहँड संस्था",
    heroSubtitle: "संगणक शिक्षण आणि आशुलिपी प्रशिक्षणातील उत्कृष्टता",
    heroDescription:
      "संगणक प्रशिक्षण, टायपिंग, टॅली आणि आशुलिपी मध्ये व्यावसायिक अभ्यासक्रम प्रदान करणारी सरकारी मान्यताप्राप्त संस्था",
    enrollNow: "आता नोंदणी करा",
    payFeesOnline: "ऑनलाइन शुल्क भरा",
    bookBatch: "बॅच बुक करा",
    viewCourses: "अभ्यासक्रम पहा",

    // Stats
    yearsExperience: "वर्षांचा अनुभव",
    studentsEnrolled: "नोंदणीकृत विद्यार्थी",
    coursesOffered: "उपलब्ध अभ्यासक्रम",
    successRate: "यशाचा दर",

    // Courses
    ourCourses: "आमचे अभ्यासक्रम",
    coursesSubtitle: "व्यावसायिक प्रशिक्षण कार्यक्रम",
    duration: "कालावधी",
    fees: "फी",
    certification: "प्रमाणपत्र समाविष्ट",
    months: "महिने",

    // Course Names
    basicComputer: "बेसिक कॉम्प्युटर कोर्स",
    basicComputerDesc: "संगणक मूलभूत तत्त्वे, एमएस ऑफिस, इंटरनेट आणि ईमेल शिका",
    mscit: "एमएस-सीआयटी",
    mscitDesc: "महाराष्ट्र राज्य माहिती तंत्रज्ञान प्रमाणपत्र",
    computerTyping: "कॉम्प्युटर टायपिंग",
    computerTypingDesc:
      "मराठी, इंग्रजी आणि हिंदी मध्ये व्यावसायिक टायपिंग प्रशिक्षण",
    tally: "टॅली",
    tallyDesc: "जीएसटी सह संपूर्ण लेखा सॉफ्टवेअर प्रशिक्षण",
    shorthand: "शॉर्टहँड (आशुलिपी)",
    shorthandDesc: "व्यावसायिक आशुलिपी आणि जलद लेखन अभ्यासक्रम",
    specialTyping: "संगणक टायपिंगमध्ये विशेष कौशल्य",
    specialTypingDesc: "स्पर्धात्मक परीक्षांसाठी प्रगत टायपिंग कौशल्ये",
    ccc: "सीसीसी",
    cccDesc: "कॉम्प्युटर सर्टिफिकेट कोर्स - मूलभूत संगणक कौशल्ये",
    dtp: "डीटीपी",
    dtpDesc: "डेस्कटॉप पब्लिशिंग सॉफ्टवेअर प्रशिक्षण",

    // Batches
    bateches: "बॅचेस",
    upcomingBatches: "आगामी बॅचेस",
    batchesSubtitle: "आमच्या पुढील सत्रात सामील व्हा",
    available: "उपलब्ध",
    fewSeatsLeft: "काही जागा शिल्लक",
    batchFull: "बॅच भरला",
    seatsAvailable: "जागा उपलब्ध",
    startsOn: "सुरुवात",
    timing: "वेळ",
    registerNow: "आता नोंदणी करा",

    // Testimonials
    testimonials: "विद्यार्थी प्रशस्तिपत्रे",
    testimonialsSubtitle: "आमचे विद्यार्थी काय म्हणतात",

    // Features
    whyChooseUs: "आम्हाला का निवडावे",
    experiencedFaculty: "अनुभवी शिक्षक",
    experiencedFacultyDesc: "प्रमाणित आणि अनुभवी शिक्षकांकडून शिका",
    govtRecognized: "सरकारी मान्यताप्राप्त",
    govtRecognizedDesc: "वैध प्रमाणपत्रांसह मान्यताप्राप्त संस्था",
    modernLab: "आधुनिक संगणक प्रयोगशाळा",
    modernLabDesc: "अत्याधुनिक पायाभूत सुविधा आणि उपकरणे",
    flexibleTimings: "लवचिक वेळापत्रक",
    flexibleTimingsDesc: "सकाळी, दुपारी आणि संध्याकाळी बॅचेस उपलब्ध",
    placementSupport: "नोकरी सहाय्य",
    placementSupportDesc: "नोकरी सहाय्य आणि मुलाखत तयारी",
    affordableFees: "परवडणारी फी",
    affordableFeesDesc: "स्पर्धात्मक किमतीत दर्जेदार शिक्षण",

    // Contact
    getInTouch: "संपर्कात रहा",
    location: "स्थान",
    email: "ईमेल",
    phone: "फोन",
    address:
      "मनिषा नगर, नगर पालिका भाजी मंडई, शॉपिंग सेंटर, दुकान क्र. १६, १७, १९, २०, पंढरपूर, महाराष्ट्र, भारत",

    // Footer
    aboutInstitute: "संस्थेबद्दल",
    aboutInstituteDesc:
      "मंदिरा कॉम्प्युटर ट्रेनिंग आणि शॉर्टहँड संस्था ही पंढरपूरमधील एक आघाडीची शैक्षणिक संस्था आहे, जी दर्जेदार संगणक शिक्षण आणि आशुलिपी प्रशिक्षण प्रदान करते.",
    quickLinks: "द्रुत दुवे",
    followUs: "आम्हाला फॉलो करा",
    allRightsReserved: "सर्व हक्क राखीव",

    // Admission Form
    admissionForm: "ऑनलाइन प्रवेश फॉर्म",
    personalDetails: "वैयक्तिक तपशील",
    fullName: "पूर्ण नाव",
    dateOfBirth: "जन्मतारीख",
    gender: "लिंग",
    male: "पुरुष",
    female: "स्त्री",
    other: "इतर",
    mobileNumber: "मोबाइल नंबर",
    emailAddress: "ईमेल पत्ता",
    courseSelection: "अभ्यासक्रम निवड",
    selectCourse: "अभ्यासक्रम निवडा",
    selectBatch: "बॅच निवडा",
    batchTiming: "बॅच वेळ",
    documents: "कागदपत्रे",
    uploadPhoto: "फोटो अपलोड करा",
    uploadId: "ओळखपत्र अपलोड करा",
    submitApplication: "अर्ज सबमिट करा",

    // Fee Payment
    onlineFeePayment: "ऑनलाइन शुल्क भरणा",
    studentId: "विद्यार्थी आयडी",
    selectPaymentMethod: "पेमेंट पद्धत निवडा",
    upi: "यूपीआय",
    debitCard: "डेबिट/क्रेडिट कार्ड",
    netBanking: "नेट बँकिंग",
    amountToPay: "भरावयाची रक्कम",
    payNow: "आता भरा",

    // Student Dashboard
    welcome: "स्वागत",
    profile: "प्रोफाइल",
    courseDetails: "अभ्यासक्रम तपशील",
    feeDetails: "शुल्क तपशील",
    totalFees: "एकूण शुल्क",
    paidAmount: "भरलेली रक्कम",
    pendingBalance: "थकित शिल्लक",
    paymentHistory: "पेमेंट इतिहास",
    date: "तारीख",
    amount: "रक्कम",
    status: "स्थिती",
    receipt: "पावती",
    download: "डाउनलोड",
    attendance: "उपस्थिती",
    performance: "कामगिरी",
    certificate: "प्रमाणपत्र",
    downloadCertificate: "प्रमाणपत्र डाउनलोड करा",

    // Admin Dashboard
    adminPanel: "प्रशासक पॅनल",
    overview: "विहंगावलोकन",
    totalStudents: "एकूण विद्यार्थी",
    totalRevenue: "एकूण उत्पन्न",
    activebatches: "सक्रिय बॅचेस",
    pendingFees: "थकित शुल्क",
    studentManagement: "विद्यार्थी व्यवस्थापन",
    batchManagement: "बॅच व्यवस्थापन",
    feeManagement: "शुल्क व्यवस्थापन",
    createNewBatch: "नवीन बॅच तयार करा",
    batchName: "बॅचचे नाव",
    maxSeats: "कमाल जागा",
    startDate: "प्रारंभ तारीख",
    endDate: "समाप्ती तारीख",
    create: "तयार करा",

    // Typing Practice
    typingPracticeTitle: "परस्परसंवादी टायपिंग सराव",
    selectLanguage: "भाषा निवडा",
    english: "इंग्रजी",
    marathi: "मराठी",
    hindi: "हिंदी",
    startPractice: "सराव सुरू करा",
    speed: "वेग",
    accuracy: "अचूकता",
    wpm: "WPM",
    reset: "रीसेट",

    // Common
    loading: "लोड होत आहे...",
    submit: "सबमिट करा",
    cancel: "रद्द करा",
    save: "जतन करा",
    edit: "संपादित करा",
    delete: "हटवा",
    view: "पहा",
    search: "शोधा",
    filter: "फिल्टर",
    export: "निर्यात",
    print: "प्रिंट",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
