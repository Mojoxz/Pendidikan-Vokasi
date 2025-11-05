export const quizData = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan Revolusi Industri 4.0?",
    options: [
      "Penggunaan mesin uap dalam industri",
      "Integrasi teknologi digital, IoT, AI, dan big data dalam industri",
      "Penggunaan listrik untuk produksi massal",
      "Penggunaan komputer pertama kali"
    ],
    correct: 1,
    explanation: "Revolusi Industri 4.0 adalah era di mana teknologi digital, Internet of Things (IoT), Artificial Intelligence (AI), dan big data terintegrasi dalam proses industri dan kehidupan sehari-hari."
  },
  {
    id: 2,
    question: "Apa keunggulan utama pendidikan vokasi?",
    options: [
      "Fokus pada teori tanpa praktik",
      "Memberikan keterampilan praktis yang siap kerja",
      "Hanya mengajarkan satu bidang saja",
      "Tidak memerlukan sertifikasi"
    ],
    correct: 1,
    explanation: "Pendidikan vokasi memberikan keterampilan praktis dan langsung yang membuat lulusannya siap bekerja di industri dengan kompetensi yang relevan."
  },
  {
    id: 3,
    question: "Teknologi manakah yang BUKAN bagian dari Industri 4.0?",
    options: [
      "Internet of Things (IoT)",
      "Artificial Intelligence (AI)",
      "Mesin Uap",
      "Big Data Analytics"
    ],
    correct: 2,
    explanation: "Mesin uap adalah teknologi dari Revolusi Industri 1.0 (abad ke-18). Industri 4.0 berfokus pada teknologi digital modern seperti IoT, AI, dan Big Data."
  },
  {
    id: 4,
    question: "Keterampilan apa yang paling dibutuhkan di era Industri 4.0?",
    options: [
      "Hanya keterampilan manual tradisional",
      "Literasi digital dan kemampuan adaptasi teknologi",
      "Keterampilan menulis tangan yang baik",
      "Kemampuan menghafal tanpa memahami"
    ],
    correct: 1,
    explanation: "Di era Industri 4.0, literasi digital, kemampuan berpikir kritis, pemecahan masalah, dan adaptasi terhadap teknologi baru menjadi keterampilan yang sangat penting."
  },
  {
    id: 5,
    question: "Apa tujuan utama SMK (Sekolah Menengah Kejuruan)?",
    options: [
      "Mempersiapkan siswa untuk kuliah saja",
      "Menghasilkan lulusan siap kerja dengan kompetensi spesifik",
      "Fokus pada pelajaran umum tanpa praktik",
      "Menghindari penggunaan teknologi"
    ],
    correct: 1,
    explanation: "SMK bertujuan menghasilkan lulusan yang memiliki kompetensi spesifik dan siap bekerja di industri sesuai dengan bidang keahliannya, sambil tetap membuka peluang untuk melanjutkan pendidikan."
  },
  {
    id: 6,
    question: "Apa yang dimaksud dengan 'Link and Match' dalam pendidikan vokasi?",
    options: [
      "Program bermain game online",
      "Kesesuaian antara kurikulum pendidikan dengan kebutuhan industri",
      "Sistem perjodohan siswa",
      "Platform media sosial"
    ],
    correct: 1,
    explanation: "Link and Match adalah konsep di mana kurikulum pendidikan vokasi disesuaikan dengan kebutuhan nyata industri, sehingga lulusan memiliki kompetensi yang relevan dan dibutuhkan oleh dunia kerja."
  },
  {
    id: 7,
    question: "Manakah yang termasuk bidang keahlian dalam pendidikan vokasi?",
    options: [
      "Teknik dan Rekayasa, Teknologi Informasi, Bisnis dan Manajemen",
      "Hanya teori matematika murni",
      "Hanya seni lukis tradisional",
      "Hanya olahraga"
    ],
    correct: 0,
    explanation: "Pendidikan vokasi mencakup berbagai bidang keahlian seperti Teknik dan Rekayasa, Teknologi Informasi dan Komunikasi, Bisnis dan Manajemen, Pariwisata, Kesehatan, Seni dan Kerajinan, dan masih banyak lagi."
  },
  {
    id: 8,
    question: "Apa manfaat sertifikasi kompetensi bagi lulusan vokasi?",
    options: [
      "Tidak ada manfaatnya",
      "Hanya untuk hiasan di dinding",
      "Bukti kompetensi yang diakui industri dan meningkatkan daya saing",
      "Hanya untuk menambah biaya"
    ],
    correct: 2,
    explanation: "Sertifikasi kompetensi adalah bukti resmi bahwa seseorang memiliki keterampilan tertentu yang diakui oleh industri, sehingga meningkatkan kepercayaan diri dan daya saing di pasar kerja."
  }
];

export const careerPaths = [
  {
    id: 1,
    title: "Teknik & Rekayasa",
    description: "Ahli dalam bidang teknik mesin, elektro, sipil, dan otomotif",
    skills: ["CAD/CAM", "Mekatronika", "IoT", "Robotika"],
    salary: "Rp 4-8 juta/bulan",
    demand: "Sangat Tinggi",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Teknologi Informasi",
    description: "Programmer, web developer, network engineer, data analyst",
    skills: ["Programming", "Database", "Cloud Computing", "Cybersecurity"],
    salary: "Rp 5-12 juta/bulan",
    demand: "Sangat Tinggi",
    icon: "💻",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Bisnis & Manajemen",
    description: "Administrasi perkantoran, akuntansi, pemasaran digital",
    skills: ["MS Office", "Akuntansi", "Digital Marketing", "E-Commerce"],
    salary: "Rp 4-7 juta/bulan",
    demand: "Tinggi",
    icon: "📊",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Pariwisata & Hospitality",
    description: "Perhotelan, kuliner, tour guide, event management",
    skills: ["Customer Service", "Food & Beverage", "Event Planning", "Bahasa Asing"],
    salary: "Rp 3.5-6 juta/bulan",
    demand: "Tinggi",
    icon: "🏨",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Kesehatan & Care",
    description: "Keperawatan, farmasi, asisten medis, kesehatan masyarakat",
    skills: ["Perawatan Pasien", "Farmakologi", "Medical Record", "First Aid"],
    salary: "Rp 4-9 juta/bulan",
    demand: "Sangat Tinggi",
    icon: "⚕️",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 6,
    title: "Seni & Kreatif",
    description: "Desain grafis, multimedia, animasi, broadcasting",
    skills: ["Adobe Creative Suite", "Video Editing", "3D Modeling", "UI/UX Design"],
    salary: "Rp 4-10 juta/bulan",
    demand: "Tinggi",
    icon: "🎨",
    color: "from-yellow-500 to-orange-500"
  }
];